import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './components/consts/colors.js';
import Home from './components/screens/HomeScreen';
import DetailsScreen from './components/screens/DetailScreen';
import CartScreen from './components/screens/CartScreen';
import Signup from './components/screens/SignUp';
import Login from './components/screens/Login';
import HomeScreen from './components/screens/HomeScreen';
import RootStackNavigator from './navigation/Navigation.js';

export default function App() {
  // const [currentScreen, setCurrentScreen] = React.useState('login');
  // if (currentScreen=="login"){
  //   return (
  //     <View style={styles.container}>
  //       <Login></Login>
  //     </View>
  //   );
  // }else if(currentScreen=="Sign UP"){
  //   return (
  //     <View style={styles.container}>
  //       <Signup></Signup>
  //     </View>
  //   );
  // }else{
  //   <HomeScreen></HomeScreen>
  // }
  return <RootStackNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
