import { ADD_ITEM, DELETE_ITEM } from "../actions/cartActions"

const initState = {
    totalPrice: 0,
    cart: []
}

export default CartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const cartItem = action.item
            // console.log(state.cart.length)
            // console.log(state.cart)
            const exist = state.cart.find((item) => item.id == cartItem.id)
            // console.log(exist);
            if (exist) {
                // console.log("Already Exist")
                // const item = state.cart[index]
                // console.log(item);
                var index = 0;
                for (var i = 0; i < state.cart.length; i++) {
                    if (state.cart[i].id == cartItem.id) {
                        index = i;
                        console.log("Item index", i);
                        break
                    }
                }
                state.cart[index].quantity += 1
                state = { ...state, totalPrice: state.totalPrice + cartItem.price, cart: state.cart }
                return state
            }
            else {
                // console.log("New Items")
                return {
                    ...state,
                    totalPrice: state.totalPrice + cartItem.price,
                    cart: [...state.cart, cartItem]
                }
            }
        case DELETE_ITEM:
            const cartId = action.id
            var index = 0;
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == cartId) {
                    index = i;
                    console.log("Item index", i);
                    break
                }
            }

            // state.cart.splice(index, 1)
            var totalPrice = 0;
            const DummyArray = state.cart.filter((item) => item.id != cartId)
            DummyArray.forEach((item) => {
                totalPrice += item.price * item.quantity
            })
            // console.log(DummyArray)
            // console.log(totalPrice);

        return { ...state, cart: DummyArray, totalPrice: totalPrice };
        default:
            return state
    }
}