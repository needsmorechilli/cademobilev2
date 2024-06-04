import React from 'react';
import {Text} from 'react-native';

const SimpleText = ({text, style}) => {
  return <Text style={style}>{text}</Text>;
};

export default SimpleText;
