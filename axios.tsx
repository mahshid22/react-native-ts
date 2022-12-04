/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
const getToken = async () => {
  try {
    let t = await AsyncStorage.getItem('token');
    // let t = await AsyncStorage.removeItem('token');
    // let ta = await AsyncStorage.removeItem('user');
    return t;
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

const instance = axios.create({
  baseURL: 'http://192.168.0.7:1337/api',
});

instance.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers['Authorization'] = 'Bearer ' + token;
  // (config as any).headers.common['Authorization'] = 'Bearer ' + token;
  return config;
});
export default instance;
