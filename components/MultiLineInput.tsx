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
import SocialButton from './SocialButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MultiLineInput = ({onChangeText, ...rest}) => {
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

export default MultiLineInput;

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    borderRadius: 5,
    width: '100%',
    height: 200,
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
  },

  TextInput: {
    height: 200,
    flex: 1,
    padding: 10,
    fontSize: 16,
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#f7eeef',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  icon: {
    paddingRight: 5,
  },
});
