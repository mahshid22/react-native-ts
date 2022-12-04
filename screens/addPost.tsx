/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
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
} from 'react-native';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MultiLineInput from '../components/MultiLineInput';
import PostCard from '../components/PostCard';
import SocialButton from '../components/SocialButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {windowHeight, windowWidth} from '../utils/dimention';
import {useMutation} from 'react-query';
import useAddPost from '../hooks/useAddPost';

// import PostCard from '../components/PostCard';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-2.jpg'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
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
  },
];

const AddPost = ({navigation}) => {
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const {mutate, data, isSuccess, isLoading, isIdle, isError} = useAddPost();
  React.useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Home');
    }
  }, [isSuccess, navigation]);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent().setOptions({
        swipeEnabled: false,
      });
    }, []),
  );
  const onPressButton = () => {
    launchImageLibrary(
      {
        quality: 1,
      },
      response => {
        if (!response.didCancel) {
          setImage(response.assets[0]);
          console.log(response.assets[0]);
        }
      },
    );
  };
  const submitPost = async () => {
    if (!image) return;

    const data = {
      title: 'hello from react native 2',
      caption: 'testing images',
    };

    const payload = new FormData();

    payload.append('data', JSON.stringify(data));

    payload.append('files.images', {
      name: image.fileName,

      type: image.type,

      uri: image.uri,
    });
    mutate(payload);
  };
  // const submitPost = () => {
  // setTransferred(0);
  // setUploading(true);
  // setTimeout(() => {
  //   setUploading(false);
  //   clearInterval(interval);
  //   navigation.navigate('Home');
  // }, 5000);
  // const interval = setInterval(() => {
  //   setTransferred(prevTransferred => prevTransferred + 20);
  // }, 1000);
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <SocialButton
          btnType="camera"
          color="#743a43"
          backgroundColor="#f3d2d7"
          onPress={() => {
            onPressButton();
          }}
        />
        {image && (
          <Image
            source={{uri: image.uri}}
            style={{
              borderRadius: 10,
              margin: 5,
              height: windowWidth,
              width: windowWidth,
            }}
          />
        )}

        <MultiLineInput
          placeholder="Write here..."
          placeholderTextColor="#003f5c"
          onChangeText={() => {}}
          multiline={true}
          numberOfLines={20}
        />
        <View style={styles.submitBTN}>
          {!uploading ? (
            <FormButton buttonTitle="Submit" onPress={submitPost} />
          ) : (
            <>
              <Text>{transferred} % Completed!</Text>
              <ActivityIndicator size="large" color="#0000ff" />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddPost;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  submitBTN: {
    width: '80%',
  },
});
