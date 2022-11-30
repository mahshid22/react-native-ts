/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
import {FlatList, Image, RefreshControl, Text, View} from 'react-native';
import PostCard from '../components/PostCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFrameCallback} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowHeight, windowWidth} from '../utils/dimention';

import {
  NavigationHelpersContext,
  useFocusEffect,
} from '@react-navigation/native';
import Story from '../components/Story';
import axios from '../axios';

// import PostCard from '../components/PostCard';

// const Posts = [
//   {
//     id: '1',
//     userName: 'Buddha kitty',
//     userImg: require('../assets/users/user-1.jpg'),
//     postTime: '4 mins ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-4.jpg'),
//     liked: true,
//     likes: '14',
//     comments: '55',
//     saved: true,
//   },
//   {
//     id: '2',
//     userName: 'Cat Sprayed',
//     userImg: require('../assets/users/user-2.jpg'),
//     postTime: '2 hours ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '8',
//     comments: '0',
//     saved: false,
//   },
//   {
//     id: '3',
//     userName: 'Rumpus Cat',
//     userImg: require('../assets/users/user-3.jpg'),
//     postTime: '1 hours ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-2.jpg'),
//     liked: true,
//     likes: '1',
//     comments: '0',
//     saved: false,
//   },
//   {
//     id: '4',
//     userName: 'Snowcone',
//     userImg: require('../assets/users/user-4.jpg'),
//     postTime: '1 day ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: require('../assets/posts/post-img-3.jpg'),
//     liked: true,
//     likes: '22',
//     comments: '4',
//     saved: true,
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     userImg: require('../assets/users/user-5.jpg'),
//     postTime: '2 days ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '0',
//     comments: '0',
//     saved: true,
//   },
//   {
//     id: '6',
//     userName: 'Christy Alex2',
//     userImg: require('../assets/users/user-6.jpg'),
//     postTime: '2 days ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '0',
//     comments: '0',
//     saved: true,
//   },
//   {
//     id: '7',
//     userName: 'Christy Alex2',
//     userImg: require('../assets/users/user-7.jpg'),
//     postTime: '2 days ago',
//     post: 'Hey there, this is my test for a post of my social app in React Native.',
//     postImg: 'none',
//     liked: false,
//     likes: '0',
//     comments: '0',
//     saved: true,
//   },
// ];

const Skeleton = () => {
  return (
    <>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          marginTop={10}>
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          marginTop={30}
          alignItems="center">
          <SkeletonPlaceholder.Item
            width={windowWidth - 30}
            height={windowHeight - 250}
            borderRadius={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </>
  );
};
const Home = ({navigation}) => {
  const [skeleton, setSkeleton] = useState(true);
  const [posts, setPosts] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(() => {
    axios
      .get('posts?populate[0]=images&populate[1]=user')
      .then(async function (response) {
        // console.log(response);
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      setSkeleton(false);
    }, 4000);
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <FontAwesome5.Button
            name="plus"
            size={22}
            backgroundColor="#fff"
            color="#bd4a88"
            onPress={() => navigation.navigate('New Post')}
          />
        </View>
      ),
    });
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      {!posts ? (
        <Skeleton />
      ) : (
        <FlatList
          data={posts.data}
          // ListHeaderComponent={
          //   <View>
          //     <FlatList
          //       horizontal
          //       data={posts}
          //       renderItem={({attributes}) => <Story item={item} />}
          //       keyExtractor={item => item.id}
          //       showsVerticalScrollIndicator={false}
          //       showsHorizontalScrollIndicator={false}
          //     />
          //   </View>
          // }
          renderItem={({item}) => (
            <PostCard item={item} onPress={() => navigation.navigate('Post')} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}

      {/* <FlatList
        data={posts}
        ListHeaderComponent={
          <View>
            <FlatList
              horizontal
              data={posts}
              renderItem={({item}) => <Story item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        }
        renderItem={({item}) => (
          <PostCard item={item} onPress={() => navigation.navigate('Post')} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */}
    </SafeAreaView>
  );
};
export default Home;
