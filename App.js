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
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import CartReducer from './store/reducer/cartReducer'

export default function App() {
  const rootReducer = combineReducers({
    'cart': CartReducer
  })

  const store = createStore(rootReducer)

  return <Provider store={store}>
    <RootStackNavigator />
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
