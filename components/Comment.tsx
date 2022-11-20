/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimention';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Comment = ({item}) => {
  return (
    <View style={styles.userInfo}>
      <Image source={item.userImg} style={styles.userImage} />
      <View style={styles.commentDetails}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.comment}>{item.commentText}</Text>
      </View>
      <View style={styles.likeBTN}>
        <TouchableOpacity style={styles.interaction}>
          <Ionicons
            name={!item.liked ? 'heart-outline' : 'heart'}
            size={25}
            color={!item.liked ? '#333' : '#f42394'}
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {},
  userInfo: {
    padding: 10,
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  comment: {
    fontSize: 13,
    fontWeight: '900',
    color: 'white',
  },
  userName: {
    fontSize: 11,
    color: '#8a8a8a',
  },
  commentDetails: {
    width: '70%',
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
  likeIcon: {marginRight: 5},
  likeBTN: {},
});
