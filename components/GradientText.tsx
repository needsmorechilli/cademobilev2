import React from 'react';
import {Text, Style} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['yellow', '#FF00FF', 'orange', 'yellow']}
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 0}}
      >
        <Text {...props} style={[props.style, {opacity: -900}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
