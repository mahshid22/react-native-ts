/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Button,
  RefreshControl,
  SectionList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Comment from '../components/Comment';

const SettingsCat = [
  {
    title: 'ACCOUNT',
    data: ['edit profile', 'change profile', 'payment', 'story setting'],
  },
  {
    title: 'OPTIONS',
    data: ['comments', 'language', 'some other options'],
  },
  {
    title: 'LOGOUT',
    data: ['logout'],
  },
  {
    title: 'DELETE ACCOUNT',
    data: ['delete account'],
  },
];

const Item = ({title}) => {
  if (title === 'delete account') {
    return;
  }
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const Settings = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 6000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SectionList
        sections={SettingsCat}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) =>
          title === 'DELETE ACCOUNT' ? (
            <TouchableOpacity>
              <Text style={styles.deleteHeader}>{title}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.header}>{title}</Text>
          )
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#f3f1f9',
    borderBottomWidth: 1,
  },
  header: {
    padding: 20,
    paddingTop: 25,
    fontSize: 18,
    backgroundColor: '#f3f1f3',
  },
  deleteHeader: {
    padding: 20,
    fontSize: 18,
    backgroundColor: '#cdcbcb',
    color: '#f82424',
  },
  title: {fontSize: 16},
  delete: {color: '#cd002c'},
});
