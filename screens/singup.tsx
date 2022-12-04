/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext, useState, type PropsWithChildren} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';
import {RootStackParamList} from '../navogation/AuthStack';
import axios from 'axios';
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
const SignUp = ({navigation}: Props<'SignUp'>) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [filePath, setFilePath] = useState({});
  const {user, setUser} = useContext(AuthContext);

  const storeToken = async jwt => {
    try {
      await AsyncStorage.setItem('token', jwt);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  const signUp = () => {
    axios
      .post('http://192.168.0.7:1337/api/auth/local/register', {
        email: email,
        username: userName,
        password: password,
      })
      .then(response => {
        // console.log(response);
        storeToken(response.data.jwt);
        setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.GroupView}>
          <Image
            source={require('../assets/2065064.png')}
            style={styles.logo}
          />
          <Text style={styles.logotext}>CONNECT TO PEOPLE</Text>
          <Text style={styles.creatAccount}>CREAT ACCOUNT</Text>
        </View>
        <View style={(styles.GroupView, styles.InputGroupView)}>
          <SocialButton
            btnType="camera"
            color="#743a43"
            backgroundColor="#f3d2d7"
            onPress={() => {
              // chooseFile();
            }}
          />
          <Input
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={newText => {
              setUserName(newText);
            }}
            name="user"
            color="black"
          />
          <Input
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={newText => setEmail(newText)}
            name="envelope"
            color="black"
          />
          <Input
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            name="lock"
            color="black"
            onChangeText={newText => setPassword(newText)}
          />
          <Input
            style={styles.TextInput}
            placeholder="Mobile Number"
            placeholderTextColor="#003f5c"
            onChangeText={() => {}}
            name="mobile"
            color="black"
          />

          <FormButton
            buttonTitle="SIGNUP"
            onPress={() => {
              signUp();
            }}
          />
        </View>
        <View style={(styles.GroupView, styles.footerGroupView)}>
          <Text>Already have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LogIn');
            }}>
            <Text style={styles.signIn}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    // paddingTop: 10,
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 30,
  },

  camera: {
    marginBottom: 20,
  },
  logotext: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
  },

  GroupView: {
    alignItems: 'center',
  },
  rowGroupView: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerGroupView: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 40,
  },
  socialGroupView: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  InputGroupView: {
    width: '70%',
    alignItems: 'center',
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
    marginTop: 70,
    marginBottom: 5,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#e7489e',
  },
  creatAccount: {
    marginBottom: 15,
    fontSize: 25,
    color: 'black',
  },
  signIn: {
    paddingLeft: 5,
    fontWeight: '900',
    color: '#393939',
  },
});

export default SignUp;
