// components/ConnectButton.tsx
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {
  ComponentProps,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {Button} from 'react-native';

import {useAuthorization} from './providers/AuthorizationProvider';
import {alertAndLog} from '../util/alertAndLog';

type Props = Readonly<ComponentProps<typeof Button>> & {
  onConnectPress?: () => void;
};

const ConnectButton = forwardRef(({onConnectPress, ...props}: Props, ref) => {
  const {authorizeSession} = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);

  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
    } catch (err: any) {
      alertAndLog(
        'Error during connect',
        err instanceof Error ? err.message : err,
      );
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);

  useImperativeHandle(ref, () => ({
    onPress: handleConnectPress,
  }));

  return (
    <Button
      {...props}
      disabled={authorizationInProgress}
      onPress={onConnectPress || handleConnectPress}
    />
  );
});

export default ConnectButton;
