import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

//import Card
import { Card } from 'react-native-paper';



const Signup = () => {
  return (
    <View style={styles.container}>
    <Card style={{ borderRadius:100,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('./assets/Login/Best-souk.jpg')}
      style={{ width: 170, height: 170 }} />
        </Card>
        <Card style={{ borderRadius:20,marginTop:30}}>
          <Text style={styles.paragraph}> Register In Best Souck</Text>
          <TextInput style={styles.texInput} placeholder='Enter Email' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter Name' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter Password' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter  Confirm Password' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter Gender' placeholderTextColor="black"/>
        </Card>
        <TouchableOpacity style={styles.button}>
            <Text style = {{color:'black',fontWeight:'bold', fontSize: 18}}>Sign Up </Text>
        </TouchableOpacity>
          
        <TouchableOpacity>
             
             <Text style = {{color:'white',fontWeight:'bold', fontSize: 18,textAlign:'center'}}>Already Registered </Text>
        </TouchableOpacity>

    </View>
  );
};

export default Signup;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#007500'

    
  },

  tex:{
    fontSize:16,
    fontWeight: 'bold',
    color:'black',
    padding:5
    
  },
  texInput:{
    borderWidth:1,
    borderRadius:25,
    color:'black',
    margin:10
    
    
  },
  texInput2:{
    borderWidth:1,
    borderRadius:25,
    color:'black',
    margin:10
    
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    color:'black',
    fontStyle:'italic'
  },
  button:{
    marginTop:30,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom:10,

  }
});