/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const MyTextCustomFont = props => {
  return (
    <Text style={{fontFamily: 'THE_BONES'}} {...props}>
      {props.children}
    </Text>
  );
};
export default MyTextCustomFont;
