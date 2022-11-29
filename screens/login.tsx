/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {RouteProp} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';
import {RootStackParamList} from '../navogation/AuthStack';
import {AuthContext} from '../navogation/AuthProvider';

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};
type Data = {
  id: string;
  title: string;
};

type Datas = Data[];
const LogIn = ({navigation}: Props<'LogIn'>) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(AuthContext);
  const storeToken = async jwt => {
    try {
      await AsyncStorage.setItem('token', jwt);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  const logIn = () => {
    console.log('object', userName, password);
    axios
      .post('https://powerful-dusk-84737.herokuapp.com/api/auth/local', {
        identifier: userName,
        password: password,
      })
      .then(response => {
        console.log(response);
        storeToken(response.data.jwt);
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.GroupView}>
        <Image source={require('../assets/2065064.png')} style={styles.logo} />
        <Text style={styles.logotext}>CONNECT TO PEOPLE</Text>
      </View>
      <View style={(styles.GroupView, styles.InputGroupView)}>
        <Input
          placeholder="UserName"
          placeholderTextColor="#003f5c"
          onChangeText={(newText: string) => setUserName(newText)}
          name="envelope"
          color="black"
        />
        <Input
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={newText => setPassword(newText)}
          name="lock"
          color="black"
        />

        <FormButton
          buttonTitle="LOGIN"
          onPress={() => {
            logIn();
          }}
        />
      </View>
      <View style={styles.GroupView}>
        <View style={(styles.GroupView, styles.rowGroupView)}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.forgot_button}>Creat account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={(styles.GroupView, styles.rowGroupView)}>
          <View style={{flex: 1, height: 1, backgroundColor: '#f3a4cf'}} />
          <View>
            <Text style={{textAlign: 'center', paddingHorizontal: 12}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#f3a4cf'}} />
        </View>
      </View>

      <View style={(styles.GroupView, styles.socialGroupView)}>
        <Text>Connect with: </Text>
        <SocialButton
          // buttonTitle="Sign Up with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
        <SocialButton
          // buttonTitle="Sign Up with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />

        <SocialButton
          // buttonTitle="Sign Up with Google"
          btnType="twitter"
          color="#0076ff"
          backgroundColor="#cfe5fe"
          onPress={() => {}}
        />
      </View>
      <Text style={styles.footer}>All right reserved by us!!!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
    paddingTop: 10,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  logotext: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  GroupView: {
    alignItems: 'center',
    width: '100%',
  },
  rowGroupView: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialGroupView: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  InputGroupView: {
    width: '70%',
  },
  inputView: {
    backgroundColor: '#f3d2d7',
    borderRadius: 30,
    width: '100%',
    height: 45,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 16,
  },

  forgot_button: {
    height: 30,
    marginTop: 30,
    marginBottom: 5,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#e7489e',
  },
  footer: {
    // marginTop: 10,
  },
});

export default LogIn;
