/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type Data = {
  id: string;
  title: string;
};
type Datas = Data[];

const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};

const List = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11')
      .then(response => response.json())
      .then(json => {
        setUsers(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const DATA: Datas = users;

  const Item = ({item, onPress, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
        style={[styles.image]}
        source={{
          uri: item.image,
        }}
      />
      <View style={[styles.information]}>
        <Text style={[styles.title, textColor]}>
          {item.name.substring(0, 15)} ...
        </Text>
        <Text style={[styles.species]}>{item.species}</Text>
      </View>
      <Image
        style={[styles.arrow]}
        source={require('../assets/next-page-64.png')}
      />
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'deeppink' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{color}}
      />
    );
  };

  return users.length ? (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.welcome]}>The Rick and Morty</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color={'red'} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe0e2',
  },
  item: {
    padding: 10,
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    marginHorizontal: 20,
    borderBottomColor: '#FFC0CB',
    borderBottomWidth: 1,
  },
  welcome: {
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#FFC0CB',
    color: 'black',
  },
  information: {
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 17,
  },
  species: {
    fontSize: 12,
    color: '#687183',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  arrow: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default List;
