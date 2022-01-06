import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../components/screens/HomeScreen";
import LoginApp from "../components/screens/Login";
import CartScreen from '../components/screens/CartScreen'
import Signup from "../components/screens/SignUp";
import DetailsScreen from "../components/screens/DetailScreen";
import { Pressable, Text } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const ProductsStack = createNativeStackNavigator()
const RootStack = createNativeStackNavigator();

const ProductStackNavigator = () => {
    return (
        <ProductsStack.Navigator screenOptions={{ headerShown: false }}>
            <ProductsStack.Screen name="HomeScreen" component={HomeScreen} />
            <ProductsStack.Screen name="DetailScreen" component={DetailsScreen} />
        </ProductsStack.Navigator>
    );
    
}

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="ProductScreen" component={ProductStackNavigator} options={({ navigation }) => {
                return {
                    headerRight: () => {
                        return <Pressable onPress={async () => {
                            await AsyncStorage.removeItem('userData')
                            navigation.replace("LoginScreen")
                        }}>
                            <Icon name="logout" size={28} />
                        </Pressable>
                    }
                }
            }} />
            <Drawer.Screen name="CartScreen" component={CartScreen} />
        </Drawer.Navigator>
    );
}

const RootStackNavigator = () => {
    return (<NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="LoginScreen" component={LoginApp} />
            <RootStack.Screen name="SignupScreen" component={Signup} />
            <RootStack.Screen name="RootDrawer" component={MyDrawer} />
        </RootStack.Navigator>
    </NavigationContainer>)
}

export default RootStackNavigator