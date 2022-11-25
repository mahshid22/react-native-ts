/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home';
import AddPost from '../screens/addPost';
import Post from '../screens/post';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Settings from '../screens/setting';
import {createDrawerNavigator} from '@react-navigation/drawer';
export type RootStackParamList = {
  Feed: undefined;
  AddPost: undefined;
  Post: undefined;
  Profile: undefined;
  Settings: undefined;
  DrawerNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Feed"
      component={Home}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#bd4a88',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
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
  </Stack.Navigator>
);

const AddPostStack = () => (
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

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#bd4a88',
        drawerStyle: {width: '80%', backgroundColor: '#f1f1f1'},
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="setting" component={Settings} />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            color: '#7b817c',
            backgroundColor: '#60de78',
          },
          tabBarActiveTintColor: '#bd4a88',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'#bd4a88'} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="New Post"
        component={AddPostStack}
        options={({route}) => ({
          tabBarActiveTintColor: '#bd4a88',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbox-ellipses" color={'#bd4a88'} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Me"
        component={DrawerNavigation}
        options={({route}) => ({
          tabBarActiveTintColor: '#bd4a88',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" color={'#bd4a88'} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
