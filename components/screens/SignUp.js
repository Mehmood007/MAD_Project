import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import axios from 'axios';
import { API_KEY } from '../../env'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Signup = ({ navigation, route }) => {
  const [email, setemail] = React.useState();
  const [pass, setPass] = React.useState();
  const [name, setName] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  return (
    <View style={{ backgroundColor: 'lightblue' }}>
      <View style={{ borderRadius: 20, marginTop: 30 }}>
        <Text style={styles.paragraph}>Sign UP</Text>
        <TextInput style={styles.texInput} placeholder='Enter Email' placeholderTextColor="black" value={email} onChangeText={(value) => {
          console.log(value)
          setemail(value)
        }} />
        <TextInput style={styles.texInput2} placeholder='Enter Name' placeholderTextColor="black" value={name} onChangeText={(value) => {
          setName(value)
        }} />
        <TextInput style={styles.texInput2} placeholder='Enter Password' placeholderTextColor="black" secureTextEntry={true} value={pass} onChangeText={(value) => {
          setPass(value)
        }} />
        <TextInput style={styles.texInput2} placeholder='Enter  Confirm Password' placeholderTextColor="black" secureTextEntry={true} value={confirmPassword} onChangeText={(value) => {
          setConfirmPassword(value)
        }} />
      </View>
      <TouchableOpacity style={styles.button} onPress={
        async () => {
          const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBddMtRAIPNUXsRna7iJNAbp685vHkNx5Q", {
            email: email,
            password: pass,
            returnSecureToken: true
          })
          const parsedData = response.data

          // console.log(parsedData)
          const localId = parsedData.localId
          console.log(localId)

          await axios.post(`${API_KEY}users/${localId}.json`, {
            name: name,
            email: email,
          })

          await AsyncStorage.setItem('userData', JSON.stringify({
            'userName': name,
            'localId': localId,
            'email': email
          }))

          console.log(response)
          navigation.replace("RootDrawer")

        }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Sign Up </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.replace("LoginScreen")
      }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Already Registered </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Signup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007500'


  },

  tex: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 5

  },
  texInput: {
    borderWidth: 1,
    borderRadius: 25,
    color: 'black',
    margin: 10


  },
  texInput2: {
    borderWidth: 1,
    borderRadius: 25,
    color: 'black',
    margin: 10

  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    color: 'black',
    fontStyle: 'italic'
  },
  button: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,

  }
});