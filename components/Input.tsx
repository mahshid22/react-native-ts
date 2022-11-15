/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';

const Input = ({onChangeText, ...rest}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        {...rest}
        onChangeText={newText => onChangeText(newText)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#f3d2d7',
    borderRadius: 30,
    width: '100%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
});
