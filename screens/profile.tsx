/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
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

const Profile = ({navigation}) => {
  const gradient = `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%), repeating-linear-gradient(-115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`;

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        swipeEnabled: true,
      });
    }, []),
  );
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
            <Text style={styles.profileName}>Rasputin Cat</Text>
            <Text style={styles.userSpecialty}>Proggmawer</Text>
          </View>
          <View style={styles.profileDescription}>
            <Text>
              A cat who is interested to programming - familier with React ...
            </Text>
          </View>
          <View style={styles.profilePostsContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/posts/post-img-5.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/users/user-2.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/users/user-7.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/users/user-6.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/users/user-1.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/users/user-3.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/posts/post-img-2.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/posts/post-img-3.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/posts/post-img-4.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Post');
              }}>
              <Image
                source={require('../assets/posts/post-img-6.jpg')}
                style={styles.profilePost}
              />
            </TouchableOpacity>
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
    backgroundColor: 'red',
  },
});
