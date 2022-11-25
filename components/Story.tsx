/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Story = ({item}) => {
  return (
    <View style={styles.userInfo}>
      <TouchableOpacity>
        <Image source={item.userImg} style={styles.userImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  userInfo: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#42ff66',
    borderWidth: 2,
  },
});
