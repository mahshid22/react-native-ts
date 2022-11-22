/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  RefreshControl,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MultiLineInput from '../components/MultiLineInput';
import PostCard from '../components/PostCard';
import SocialButton from '../components/SocialButton';
import {windowHeight} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../components/Comment';

// import PostCard from '../components/PostCard';
const postDetail = {
  id: '1',
  userName: 'Buddha kitty',
  userImg: require('../assets/users/user-1.jpg'),
  postTime: '4 mins ago',
  post: 'Hey there, this is my test for a post of my social app in React Native.',
  postImg: require('../assets/posts/post-img-4.jpg'),
  liked: true,
  likes: '14',
  comments: '55',
  commentsText: [
    {
      id: '1',
      userName: 'Rumpus Cat',
      userImg: require('../assets/users/user-1.jpg'),
      commentText: 'some comment ....',
      liked: true,
    },
    {
      id: '2',
      userName: 'Rumpus Cat 2',
      userImg: require('../assets/users/user-1.jpg'),
      commentText: 'other comment ....',
      liked: false,
    },
    {
      id: '3',
      userName: 'Rumpus Cat 3',
      userImg: require('../assets/users/user-1.jpg'),
      commentText: 'blah blah blah',
      liked: false,
    },
  ],
};
// const items =

const Profile = ({}) => {
  const [image, setImage] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const submitPost = () => {
    setTransferred(0);
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      clearInterval(interval);
    }, 5000);
    const interval = setInterval(() => {
      setTransferred(prevTransferred => prevTransferred + 20);
    }, 1000);
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 6000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.postImageWrapper}>
          <Image
            source={require('../assets/posts/post-img-5.jpg')}
            style={styles.postImage}
          />
          <View style={styles.postActions}>
            <Text style={styles.userNameText}>Rumpus Cat</Text>
            <View style={styles.InteractionWrapper}>
              <TouchableOpacity
                style={
                  postDetail.liked
                    ? styles.likedInteraction
                    : styles.interaction
                }>
                <Ionicons
                  name={!postDetail.liked ? 'heart-outline' : 'heart'}
                  size={25}
                  color={!postDetail.liked ? '#333' : '#f42394'}
                  style={styles.likeIcon}
                />
                <Text
                  style={
                    postDetail.liked
                      ? [styles.likedInteractionText, styles.text]
                      : [styles.interactionText, styles.text]
                  }>
                  {postDetail.likes > 1
                    ? postDetail.likes + ' likes'
                    : postDetail.likes == 1
                    ? postDetail.likes + 'like'
                    : 'like'}
                </Text>
              </TouchableOpacity>
              <View style={styles.interaction}>
                <Ionicons
                  name="md-chatbubble-outline"
                  size={25}
                  style={styles.commentIcon}
                />
                <Text style={styles.text}>
                  {postDetail.comments > 1
                    ? postDetail.comments + ' comments'
                    : postDetail.comments == 1
                    ? postDetail.comments + ' comment'
                    : 'comment'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={postDetail.commentsText}
          renderItem={({item}) => <Comment item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#080412',
  },
  postImageWrapper: {
    width: '100%',
    backgroundColor: '#c708c8',
    height: windowHeight / 2 + 100,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  postImage: {
    width: '100%',
    height: windowHeight / 2,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  submitBTN: {
    width: '80%',
  },
  InteractionWrapper: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  likedInteraction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ffe1f1',
  },
  commentIcon: {marginRight: 5},
  likeIcon: {marginRight: 5},
  interactionText: {color: '#333'},
  likedInteractionText: {
    color: '#f42394',
  },
  text: {
    fontSize: 16,
    fontFamily: 'THE_BONES',
  },
  userNameText: {
    fontSize: 20,
    fontFamily: 'RubikBubbles-Regular',
  },
  postActions: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
