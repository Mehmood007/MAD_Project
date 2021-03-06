import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import HeadPhone from '../../assets/HeadPhones.png';
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../store/actions/cartActions'


function ProductDetails(props) {



  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={HeadPhone} style={{ height: 220, width: 220 }} />
        </View>

        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
              {props.title}
            </Text>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.white }}>
              $ {props.price}
            </Text>
          </View>

          <Text style={style.detailsText}>
            {props.description}
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.addToCart.bind(this, { id: props.id, title: props.title, price: props.price, quantity: 1})} >
              <View
                style={{
                  ...style.btnContainer,
                  backgroundColor: COLORS.white,
                }}>
                <Text style={{ ...style.title, color: COLORS.primary }}>
                  Add To Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation, route }) {
  const title = route.params.title;
  const description = route.params.description
  const price = route.params.price
  const productid = route.params.id;

  const dispatch = useDispatch()

  const addToCart = (item) => {
    dispatch(addItem(item))
  }
  return (
    <View>
      <ProductDetails title={title} description={description} price={price} navigation={navigation} id={productid} addToCart={addToCart} />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

  },

  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  title: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },

  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DetailsScreen;
