import { ADD_ITEM, DELETE_ITEM } from "../actions/cartActions"

const initState = {
    totalPrice: 0,
    cart: []
}

export default CartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const cartItem = action.item
            if (state.cart.contains(cartItem.id))
                return state
        case DELETE_ITEM:
            return state;
        default:
            return state
    }
}