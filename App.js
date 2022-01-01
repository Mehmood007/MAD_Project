import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './components/consts/colors.js';
import Home from './components/screens/HomeScreen';
import DetailsScreen from './components/screens/DetailScreen';
import CartScreen from './components/screens/CartScreen';
import Signup from './components/screens/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <CartScreen></CartScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
