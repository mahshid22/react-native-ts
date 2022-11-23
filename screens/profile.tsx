/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Button} from 'react-native';

import {windowHeight} from '../utils/dimention';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#080412'}}>
      <Button
        title="post details"
        onPress={() => navigation.navigate('Post')}
      />
      <Button
        title="settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({});
