/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/home';
import AddPost from '../screens/addPost';
import Post from '../screens/post';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Settings from '../screens/setting';
export type RootStackParamList = {
  Feed: undefined;
  AddPost: undefined;
  Post: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Feed"
      component={Home}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#f42394',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#f42394"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="Post"
      component={Post}
      options={{
        headerTitle: 'Post',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPost}
      options={{
        // headerTitle: 'AddPost',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerTitle: 'Profile',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="Post"
      component={Post}
      options={{
        headerTitle: 'Post',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerTitle: 'Settings',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AddPostStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="AddPost"
      component={AddPost}
      options={{
        headerTitle: 'AddPost',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen name="Feed" component={Home} />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarBadge: 3,
          // tabBarVisible: false,
          tabBarActiveTintColor: '#f42394',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={'#f42394'}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="New Post"
        component={AddPostStack}
        options={({route}) => ({
          tabBarActiveTintColor: '#f42394',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={'#f42394'}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Me"
        component={ProfileStack}
        options={({route}) => ({
          tabBarActiveTintColor: '#f42394',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={'#f42394'} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
