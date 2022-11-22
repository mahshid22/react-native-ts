/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
