import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import HeadPhone from '../../assets/HeadPhones.png';

function CartCard() {
  return (<View style={style.cartCard}>
        <Image source={HeadPhone} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Milk</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            Cow Milk
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>24 $</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={style.actionBtn}>
          <TouchableOpacity><Icon name="delete" size={25} color={COLORS.white} /></TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

function CartScreen() {
  return (
    <View>
      <CartCard />
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
