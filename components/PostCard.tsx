/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={item.userImg} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>some people</Text>
          <Text style={styles.postTime}>30 min ago</Text>
        </View>
      </View>
      <Text style={styles.postText}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      {item.postImg !== 'none' ? (
        <Image source={item.postImg} style={styles.postImage} />
      ) : (
        <View style={styles.divider} />
      )}
      <View style={styles.InteractionWrapper}>
        <TouchableOpacity
          style={[
            // {backgroundColor: item.liked ? '#2e64e515' : 'transparent'},
            item.liked ? styles.likedInteraction : styles.interaction,
          ]}>
          <Ionicons
            name={!item.liked ? 'heart-outline' : 'heart'}
            size={25}
            color={!item.liked ? '#333' : '#2e64e5'}
            style={styles.likeIcon}
          />
          <Text
            style={[
              // {backgroundColor: item.liked ? '#2e64e515' : 'transparent'},
              item.liked ? styles.likedInteractionText : styles.interactionText,
            ]}>
            8 likes
          </Text>
        </TouchableOpacity>
        <View style={styles.interaction}>
          <Ionicons
            name="md-chatbubble-outline"
            size={25}
            style={styles.commentIcon}
          />
          <Text>10 comments</Text>
        </View>
        <View style={styles.interaction}>
          <Ionicons name="md-trash-bin" size={25} />
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecebeb',
    margin: 20,
    borderRadius: 5,
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
  },
  postImage: {
    width: '100%',
    height: windowHeight / 3,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#cbc9c9',
    margin: 10,
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
    backgroundColor: '#2e64e515',
  },
  // active: active => ({
  //   backgroundColor:active ? '#2e64e515' : 'transparent';
  //   ,
  // }),
  commentIcon: {marginRight: 5},
  likeIcon: {marginRight: 5},
  interactionText: {color: '#333'},
  likedInteractionText: {
    color: '#2e64e5',
  },
});
