import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Form from './Form';
export default class Login extends Component {
  signup() {
    Actions.signup();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Not a User? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  signupText: {color: '#bd157a', fontSize: 15},
  signupButton: {color: '#700d49', fontSize: 15, fontWeight: '500'},
});
