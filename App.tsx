import 'react-native-gesture-handler';

import React, {useState, type PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Providers from './navogation';

const App = () => {
  return <Providers />;
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
