/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={20}
          color={color}
        />
      </View>
      {buttonTitle ? (
        <View style={styles.btnTxtWrapper}>
          <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
        </View>
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth / 8,
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  //   btnTxtWrapper: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   buttonText: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     fontFamily: 'Lato-Regular',
  //   },
});
