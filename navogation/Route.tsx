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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../screens/splash';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    const token = async () => {
      let userToken;
      let userInfo;
      try {
        userToken = await AsyncStorage.getItem('token');
        userInfo = await AsyncStorage.getItem('user');
        if (userToken) {
          setTimeout(() => {
            setInitializing(true);
          }, 5000);
        } else {
          setInitializing(true);
          setUser('');
        }
        if (userInfo != null) setUser(JSON.parse(userInfo));
      } catch (error) {
        console.log('Something went wrong', error);
      }
    };
    token();
  }, []);

  if (!initializing) return <Splash />;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          {user ? <AppStack /> : <AuthStack />}
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
