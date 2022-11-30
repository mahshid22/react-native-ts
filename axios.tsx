/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
const getToken = async () => {
  try {
    let t = await AsyncStorage.getItem('token');
    console.log(t);
    return t;
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

const instance = axios.create({
  baseURL: 'https://powerful-dusk-84737.herokuapp.com/api',
});

instance.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers['Authorization'] = 'Bearer ' + token;
  // (config as any).headers.common['Authorization'] = 'Bearer ' + token;
  return config;
});
export default instance;
