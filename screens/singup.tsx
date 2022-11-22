/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, type PropsWithChildren} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
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
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';
import {RootStackParamList} from '../navogation/AuthStack';
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
  const [password, setPassword] = useState('');
  const [filePath, setFilePath] = useState({});

  return (
    // <SafeAreaView style={{flex: 1}}>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.GroupView}>
        <Image source={require('../assets/2065064.png')} style={styles.logo} />
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
          onChangeText={() => {}}
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
            setPage(true);
          }}
        />
      </View>
      <View style={(styles.GroupView, styles.footerGroupView)}>
        <Text>Already have an Account?</Text>
        <TouchableOpacity>
          <Text>SignIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 100,
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
    // width: '100%',
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
    marginBottom: 20,
    fontSize: 25,
    color: 'black',
  },
});

export default SignUp;
