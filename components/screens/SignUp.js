import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';




const Signup = () => {
  return (
    <View style={{backgroundColor:'lightblue'}}>
        <View style={{ borderRadius:20,marginTop:30}}>
          <Text style={styles.paragraph}>Sign UP</Text>
          <TextInput style={styles.texInput} placeholder='Enter Email' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter Name' placeholderTextColor="black"/>
          <TextInput style={styles.texInput2}  placeholder='Enter Password' placeholderTextColor="black" secureTextEntry = {true}/>
          <TextInput style={styles.texInput2}  placeholder='Enter  Confirm Password' placeholderTextColor="black" secureTextEntry = {true}/>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style = {{color:'black',fontWeight:'bold', fontSize: 18}}>Sign Up </Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.button}>
             <Text style = {{color:'black',fontWeight:'bold', fontSize: 18,textAlign:'center'}}>Already Registered </Text>
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