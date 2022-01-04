// import React in our code
import axios from 'axios';
import React, { useEffect } from 'react';
// import all the components we are going to use
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginApp = ({ navigation }, props) => {
  const [email, setemail] = React.useState();
  const [password, setPassword] = React.useState();
  useEffect(async () => {
    const data = await AsyncStorage.getItem('userData')
    if (data) {
      navigation.replace('RootDrawer')
    }
  }, [])
  return (
    <View>

      <View style={{ borderRadius: 20, marginTop: 20, padding: 20 }}>
        <Text style={styles.paragraph}> Login</Text>
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={(value) => {
            setemail(value)
          }}
        />

        <TextInput
          style={styles.texInput2}
          placeholder="Enter Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => {
            setPassword(value)
          }}
        />


      </View>

      <TouchableOpacity
        onPress={
          async () => {
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBddMtRAIPNUXsRna7iJNAbp685vHkNx5Q", {
              email: email,
              password: password,
              returnSecureToken: true
            })
            const parsedData = response.data
            const localId = parsedData.localId

            await AsyncStorage.setItem('userData', JSON.stringify({
              'localId': localId,
              'email': email
            }))

            navigation.replace("RootDrawer")
          }
        }
        style={styles.button}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          {' '}
          LOG IN{' '}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Not a Member?</Text>
        <TouchableOpacity onPress={() => {
          navigation.replace("SignupScreen")
        }}>
          <Text style={{ color: 'blue', borderWidth: 1, borderBottomColor: 'blue' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

export default LoginApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007500',
  },

  tex: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  texInput: {
    borderWidth: 1,
    borderRadius: 25,
    color: 'black',
    padding: 5,
  },
  texInput2: {
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    padding: 10,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
