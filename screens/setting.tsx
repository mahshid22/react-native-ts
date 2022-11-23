/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#080412'}}>
      <Button title="press me" onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  );
};

export default Settings;
const styles = StyleSheet.create({});
