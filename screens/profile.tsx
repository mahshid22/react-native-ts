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
  SectionList,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {windowHeight, windowWidth} from '../utils/dimention';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navogation/AuthProvider';
import useMyPosts from '../hooks/useMyPosts';
import useMyPostInfiniteQuery from '../hooks/useMyPosts';

const renderSpinner = () => {
  return <ActivityIndicator size="large" color="#00ff00" />;
};
const HeaderComponent = user => {
  return (
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
    </View>
  );
};

const Profile = ({navigation}) => {
  const [myPosts, rest] = useMyPostInfiniteQuery();
  const {user, setUser} = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        swipeEnabled: true,
      });
    }, []),
  );
  const loadMore = () => {
    if (rest.hasNextPage) {
      rest.fetchNextPage();
    }
  };

  if (rest.isLoading) return <Text>Loading ...</Text>;
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={styles.profilePostsContainer}> */}
      {rest.isSuccess && (
        <FlatList
          data={myPosts}
          numColumns={3}
          horizontal={false}
          onEndReached={loadMore}
          onEndReachedThreshold={2}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate('Post', {id: item.id});
                }}>
                <Image
                  key={item.id}
                  source={{
                    uri:
                      `http://192.168.0.7:1337` +
                      item.attributes.images.data[0].attributes.url,
                  }}
                  style={styles.profilePost}
                />
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={user => <HeaderComponent user={user} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={rest.isFetchingNextPage ? renderSpinner : null}
        />
      )}
      {/* <ScrollView>
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
                  {!rest.isLoading &&
                    rest.isSuccess &&
                    myPosts.map((post: any) => {
                      if (
                  post.attributes.images.data &&
                  post.attributes.images.data[0].attributes.ext !== '.false'
                ) {
                  return (
                    <TouchableOpacity
                      key={post.id}
                      onPress={() => {
                        navigation.navigate('Post', {id: post.id});
                      }}>
                      <Image
                        key={post.id}
                        source={{
                          uri:
                            `http://192.168.0.7:1337` +
                            post.attributes.images.data[0].attributes.url,
                        }}
                        style={styles.profilePost}
                      />
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                    key={post.id}
                    onPress={() => {
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
      </ScrollView> */}
      {/* </View> */}
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
