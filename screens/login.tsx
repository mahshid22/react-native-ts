/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import Input from '../components/Input';

type Data = {
  id: string;
  title: string;
};
type Datas = Data[];
const LogIn = ({setPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.GroupView}>
        <Image source={require('../assets/2065064.png')} style={styles.logo} />
        <Text style={styles.logotext}>CONNECT TO PEOPLE</Text>
      </View>
      <View style={(styles.GroupView, styles.InputGroupView)}>
        <Input
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
          onChangeText={newText => setPassword(newText)}
          name="lock"
          color="black"
        />

        <FormButton
          buttonTitle="LOGIN"
          onPress={() => {
            setPage(true);
          }}
        />
      </View>
      <View style={styles.GroupView}>
        <View style={(styles.GroupView, styles.rowGroupView)}>
          <TouchableOpacity>
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
        <Text>Connect with: </Text>
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
    paddingTop: 10,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  logotext: {
    marginTop: 30,
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
    width: '70%',
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
    textAlign: 'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
});

export default LogIn;
