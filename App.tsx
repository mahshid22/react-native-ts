/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';

import LogIn from './screens/login';
import List from './components/list';

const App = () => {
  const [page, setPage] = useState(false);

  return page ? <List /> : <LogIn setPage={setPage} />;
};

export default App;
