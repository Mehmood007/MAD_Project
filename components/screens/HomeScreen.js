import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import Shirt from '../../assets/shirt.png';
import HeadPhone from '../../assets/HeadPhones.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_KEY } from '../../env';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function Header(props) {
  return (
    <View style={{ backgroundColor: COLORS.dark }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 24, color: COLORS.light }}>Hello,</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: COLORS.light }}>
              {props.name}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want today
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
      </View>
    </View>
  );
}

{
  /*My Products Section*/
}

const MyProducts = (prop, { navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={style.card} onPress={prop.click}>
        <View style={{ alignItems: 'center', top: -60 }}>
          <Image source={prop.product} style={{ height: 120, width: 150 }} />

          <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {prop.title}
            </Text>

          </View>

          <View
            style={{
              marginTop: 5,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 50 }}>
              $ {prop.price}
            </Text>
            <TouchableOpacity>
              <View style={style.addToCartBtn}>
                <Icon name="add-shopping-cart" size={20} color={COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState()
  const [products, setProducts] = React.useState([])

  useEffect(async () => {
    const data = await AsyncStorage.getItem('userData')
    const parsedData = JSON.parse(data)
    const localId = parsedData.localId
    // console.log(parsedData)
    if (parsedData.name == null) {
      const response = await axios.get(`${API_KEY}users/${localId}.json`);
      // console.log(response.data)
      for (var key in response.data) {
        const name = response.data[key].name
        setName(name)
        await AsyncStorage.setItem('userData', JSON.stringify({
          name: name,
          email: parsedData.email,
          localId: localId
        }))
      }

      const data1 = await AsyncStorage.getItem('userData')
      console.log(data1);



    }
    else {
      const data = await AsyncStorage.getItem('userData')
      const parsedData = JSON.parse(data)
      setName(parsedData.name)
    }

    //get Products
    const productData = await axios.get(`${API_KEY}products.json`)
    console.log(productData.data);
    const dummyArr = []
    for (var key in productData.data) {
      const item = productData.data[key]
      dummyArr.push(item)
    }

    setProducts(dummyArr)

  }, [])
  return (
    <View style={style.container}>
      <Header name={name} />
      <FlatList data={products} renderItem={(itemData) => {
        return <MyProducts
          product={HeadPhone}
          title={itemData.item.name}
          description={itemData.item.description}
          price={itemData.item.price}
          click={() => {
            navigation.navigate("DetailScreen", {
              title: itemData.item.name,
              description: itemData.item.description,
              price: itemData.item.price,
              id: itemData.item.id
            })
          }}
        />
      }} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 150,
    width: "95%",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 90,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
