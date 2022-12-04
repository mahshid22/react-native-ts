/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/OIP.jpeg')} style={styles.image} />
      <Text style={styles.spalshText}>CONNECT TO PEOPLE</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  spalshText: {fontSize: 30, fontWeight: '900', color: '#e7489e'},
  image: {width: windowWidth, height: windowWidth},
});
