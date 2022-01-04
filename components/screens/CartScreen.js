import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import HeadPhone from '../../assets/HeadPhones.png';
import { FlatList } from 'react-native-gesture-handler';
import { deleteItem } from '../../store/actions/cartActions';

function CartCard(props) {
  return (<View style={style.cartCard}>
    <Image source={HeadPhone} style={{ height: 80, width: 80 }} />
    <View
      style={{
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.title}</Text>

      <Text style={{ fontSize: 17, fontWeight: 'bold' }}>$ {props.price}</Text>
    </View>
    <View style={{ marginRight: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{props.quantity}</Text>
      <View style={style.actionBtn}>
        <TouchableOpacity onPress={props.deleteItem.bind(this, props.id)}><Icon name="delete" size={25} color={COLORS.white} /></TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

function CartScreen() {
  const cartItems = useSelector(state => state.cart.cart)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const dispatch = useDispatch()
  return (
    <View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text >
          $ {totalPrice}
        </Text>
      </View>
      <FlatList data={cartItems} renderItem={(itemData) => {
        return <CartCard title={itemData.item.title} price={itemData.item.price} quantity={itemData.item.quantity} id={itemData.item.id} deleteItem={(id) => {
          dispatch(deleteItem(id))
        }} keyExtractor={(item, key) => { return key }} />
      }} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,

    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },


});

export default CartScreen;
