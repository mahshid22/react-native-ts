/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useContext, useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../utils/dimention';
import FormButton from '../components/FormButton';
import axios from '../axios';
import {AuthContext} from '../navogation/AuthProvider';

const Profile = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const {user, setUser} = useContext(AuthContext);

  React.useEffect(() => {
    axios
      .get('/posts/me')
      .then(async function (response) {
        console.log('response profile', response);
        setPosts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        swipeEnabled: true,
      });
    }, []),
  );
  console.log('posts', posts);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Button
        title="post details"
        onPress={() => navigation.navigate('Post')}
      /> */}
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.profileUserInfo}>
            <View style={styles.profileImageView}>
              <Image
                source={require('../assets/posts/post-img-5.jpg')}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.profileFollowingInfo}>
              <View style={styles.profileFollowing}>
                <View style={styles.profilePostsNumber}>
                  <Text style={styles.flowwingNumber}>530</Text>
                  <Text>Posts</Text>
                </View>
                <View style={styles.profileFollowersNumber}>
                  <Text style={styles.flowwingNumber}>3K</Text>
                  <Text>Followers</Text>
                </View>
                <View style={styles.profileFollowingNumber}>
                  <Text style={styles.flowwingNumber}>530</Text>
                  <Text>Following</Text>
                </View>
              </View>
              <View style={styles.profileFollowingBTN}>
                <FormButton buttonTitle="Follow" />
              </View>
            </View>
          </View>
          <View style={styles.profileUserName}>
            <Text style={styles.profileName}>{user.username}</Text>
            <Text style={styles.userSpecialty}>Proggmawer</Text>
          </View>
          <View style={styles.profileDescription}>
            <Text>{user.email}</Text>
          </View>
          <View style={styles.profileDescription}>
            <Text>
              A cat who is interested to programming - familier with React ...
            </Text>
          </View>
          <View style={styles.profilePostsContainer}>
            {posts.map((post: any) => {
              if (post.images[0].ext !== '.false') {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Post', {id: post.id});
                    }}>
                    <Image
                      source={{
                        uri:
                          `https://powerful-dusk-84737.herokuapp.com` +
                          post.images[0].url,
                      }}
                      style={styles.profilePost}
                    />
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      // /posts/51?populate=%2A
                      navigation.navigate('Post', {params: {id: post.id}});
                    }}>
                    <Image
                      source={require('../assets/users/nophoto.jpg')}
                      style={styles.profilePost}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#ededed',
    paddingTop: 20,
  },
  profileImageView: {
    // width: '20%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#a92a6f',
  },
  profileUserInfo: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 15,
  },
  profileFollowing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileFollowingInfo: {
    padding: 20,
    width: '80%',
  },
  profileFollowingNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  profileFollowersNumber: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePostsNumber: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowwingNumber: {
    fontWeight: '900',
  },
  profileFollowingBTN: {
    alignSelf: 'center',
    width: '80%',
  },
  profileUserName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingLeft: 10,
  },
  profileName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 15,
  },
  userSpecialty: {
    fontSize: 15,
  },
  profileDescription: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  profilePostsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  profilePost: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    backgroundColor: 'white',
  },
});
