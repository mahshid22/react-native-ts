/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import PostCard from '../components/PostCard';
import {SafeAreaView} from 'react-native-safe-area-context';

// import PostCard from '../components/PostCard';

const Posts = [
  {
    id: '1',
    userName: 'Buddha kitty',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '14',
    comments: '55',
    saved: true,
  },
  {
    id: '2',
    userName: 'Cat Sprayed',
    userImg: require('../assets/users/user-2.jpg'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
    saved: false,
  },
  {
    id: '3',
    userName: 'Rumpus Cat',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
    saved: false,
  },
  {
    id: '4',
    userName: 'Snowcone',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
    saved: true,
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-5.jpg'),
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
    saved: true,
  },
];

const Home = ({navigation}) => {
  const [posts, setPosts] = useState(Posts);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 6000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <PostCard item={item} onPress={() => navigation.navigate('Post')} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};
export default Home;
