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
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import List from './components/list';
import PostCard from './components/PostCard';
import Home from './screens/home';
import LogIn from './screens/login';
import SignUp from './screens/singup';

const App = () => {
  const [page, setPage] = useState(false);

  return page ? (
    <List />
  ) : (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView style={styles.scrollView}>
    <Home />
    // <LogIn setPage={setPage} />
    //   </ScrollView>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
export default App;
