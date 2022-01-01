// import React in our code
import axios from 'axios';
import React from 'react';
// import all the components we are going to use
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const LoginApp = ({ navigation }) => {
  const API_KEY = "https://mad-project-207eb-default-rtdb.firebaseio.com/"
  return (
    <View>

      <View style={{ borderRadius: 20, marginTop: 20, padding: 20 }}>
        <Text style={styles.paragraph}> Login</Text>
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Email"
          placeholderTextColor="black"
        />

        <TextInput
          style={styles.texInput2}
          placeholder="Enter Password"
          placeholderTextColor="black"
          secureTextEntry={true}
        />


      </View>

      <TouchableOpacity
        onPress={async () => {
          const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBddMtRAIPNUXsRna7iJNAbp685vHkNx5Q", {
            email: "mehmood@gmail.com",
            password: "qwerty123",
            returnSecureToken: true
          })
          const parsedData = response.data

          // console.log(parsedData)
          const localId = parsedData.localId
          console.log(localId)

          await axios.post(`${API_KEY}users/${localId}`, {
            name: "Mehmood Shah G",
            // number: "090078601",
            // email: 'mehmood@gmail.com',
          })

          // console.log(response)
          // navigation.navigate("RootDrawer")
          // console.log("OK")
        }}
        style={styles.button}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          {' '}
          LOG IN{' '}
        </Text>
      </TouchableOpacity>
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
