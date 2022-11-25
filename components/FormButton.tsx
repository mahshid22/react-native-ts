/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: windowHeight / 15,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: '#bd4a88',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'gray',
    fontFamily: 'Lato-Regular',
  },
});
