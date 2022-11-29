/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostCard = ({item, onPress}) => {
  let post = item.attributes;
  let time = new Date(post.createdAt);
  let localtime = time.toLocaleString('en-GB', {timeZone: 'UTC'});
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/users/avatar.png')}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>
            {post.user.data.attributes.username}
          </Text>
          <Text style={styles.postTime}>{localtime}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{post.caption}</Text>
      {post.images.data.length &&
      post.images.data[0].attributes.ext !== '.false' ? (
        <Image
          source={{
            uri:
              `https://powerful-dusk-84737.herokuapp.com` +
              post.images.data[0].attributes.url,
          }}
          style={styles.postImage}
        />
      ) : (
        <View style={styles.divider} />
      )}
      <View style={styles.InteractionWrapper}>
        <TouchableOpacity
          style={item.liked ? styles.likedInteraction : styles.interaction}>
          <Ionicons
            name={!item.liked ? 'heart-outline' : 'heart'}
            size={25}
            color={!item.liked ? '#333' : '#bd4a88'}
            style={styles.likeIcon}
          />
          <Text
            style={
              item.liked
                ? [styles.likedInteractionText, styles.text]
                : [styles.interactionText, styles.text]
            }>
            {item.likes > 1
              ? item.likes + ' likes'
              : item.likes == 1
              ? item.likes + 'like'
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
            {item.comments > 1
              ? item.comments + ' comments'
              : item.comments == 1
              ? item.comments + ' comment'
              : 'comment'}
          </Text>
        </View>
        <View style={styles.interaction}>
          <Ionicons
            name={item.saved ? 'bookmark' : 'bookmark-outline'}
            size={25}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf5f8',
    margin: 20,
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 13,
    color: 'black',
    fontWeight: '900',
  },
  postTime: {
    fontSize: 11,
    color: '#8a8a8a',
  },
  postText: {
    padding: 10,
    color: 'black',
    textAlign: 'justify',
    fontFamily: 'Kanit-Regular',
  },
  postImage: {
    width: '100%',
    height: windowHeight / 3,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffe1f1',
    marginRight: 10,
    marginLeft: 10,
  },
  InteractionWrapper: {
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
});
