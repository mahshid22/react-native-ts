/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  RefreshControl,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MultiLineInput from '../components/MultiLineInput';
import PostCard from '../components/PostCard';
import SocialButton from '../components/SocialButton';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../components/Comment';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from '../axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import usePost from '../hooks/usePost';
const postDetail = [
  {
    title: {
      id: '1',
      userName: 'Buddha kitty',
      userImg: require('../assets/users/user-1.jpg'),
      postTime: '4 mins ago',
      post: 'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../assets/posts/post-img-4.jpg'),
      liked: true,
      likes: '14',
      comments: '55',
    },
    data: [
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
      {
        id: '4',
        userName: 'Rumpus Cat 3',
        userImg: require('../assets/users/user-1.jpg'),
        commentText: 'blah blah blah',
        liked: false,
      },
      {
        id: '5',
        userName: 'Rumpus Cat 3',
        userImg: require('../assets/users/user-1.jpg'),
        commentText: 'blah blah blah',
        liked: false,
      },
    ],
  },
];

const HeaderComponent = title => {
  const user = title.title.attributes;
  let time = new Date(title.title.attributes.createdAt);
  let localtime = time.toLocaleString('en-GB', {timeZone: 'UTC'});
  return (
    <View style={styles.postImageWrapper}>
      <Image
        source={require('../assets/posts/post-img-5.jpg')}
        style={styles.postImage}
      />
      <View style={styles.postActions}>
        <Text style={styles.userNameText}>{user.title}</Text>
        <View style={styles.InteractionWrapper}>
          <TouchableOpacity
            style={user.liked ? styles.likedInteraction : styles.interaction}>
            <Ionicons
              name={!user.liked ? 'heart-outline' : 'heart'}
              size={25}
              color={!user.liked ? '#333' : '#bd4a88'}
              style={styles.likeIcon}
            />
            <Text
              style={
                user.liked
                  ? [styles.likedInteractionText, styles.text]
                  : [styles.interactionText, styles.text]
              }>
              {user.likes > 1
                ? user.likes + ' likes'
                : user.likes == 1
                ? user.likes + 'like'
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
              {user.comments > 1
                ? user.comments + ' comments'
                : user.comments == 1
                ? user.comments + ' comment'
                : 'comment'}
            </Text>
          </View>
        </View>
        <View style={styles.post}>
          <Text>
            {user.caption}
            <Text style={styles.more}> more...</Text>
          </Text>
          <Text>{localtime}</Text>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Skeleton = () => {
  return (
    <>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item
            width={windowWidth}
            height={windowHeight / 3}
            borderRadius={25}
            marginBottom={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          marginTop={2}
          alignItems="center">
          <SkeletonPlaceholder.Item
            width={windowWidth}
            height={windowHeight / 4}
            borderRadius={25}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </>
  );
};

const Post = ({navigation, route}) => {
  const {id} = route && route.params;
  const {data: post, isSuccess, isLoading} = usePost(id);
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

  if (isLoading || !isSuccess) return <Skeleton />;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#080412'}}>
      {/* <SectionList
        sections={post}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => {
          if (postDetail[0].data.length - 1 === index) {
            return (
              <View style={styles.lastcomment}>
                <Comment item={item} />
                <MultiLineInput
                  onChangeText={() => {}}
                  placeholder="write youre comment"
                />
                <FormButton buttonTitle="SEND COMMENT" />
              </View>
            );
          }
          return <Comment item={item} />;
        }}
        renderSectionHeader={({section: {title}}) => (
          <HeaderComponent title={JSON.stringify(title)} />
        )}
        // stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */}
      <HeaderComponent title={post} />
    </SafeAreaView>
  );
};
export default Post;
const styles = StyleSheet.create({
  postImageWrapper: {
    width: '100%',
    backgroundColor: '#c708c8',
    height: windowHeight / 3 + 135,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  postImage: {
    width: '100%',
    height: windowHeight / 3,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  post: {
    width: '100%',
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
    color: '#bd4a88',
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
  lastcomment: {
    marginBottom: 20,
  },
  more: {
    color: 'black',
    fontWeight: '900',
  },
});
