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

const Input = ({onChangeText, color, name, ...rest}) => {
  return (
    <View style={styles.inputView}>
      {name && (
        <FontAwesome name={name} size={22} color={color} style={styles.icon} />
      )}
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
    flexDirection: 'row',
    backgroundColor: '#f7eeef',
    borderRadius: 5,
    width: '100%',
    height: 45,
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    paddingRight: 5,
  },
});
