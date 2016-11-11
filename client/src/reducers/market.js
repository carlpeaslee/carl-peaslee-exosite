import {ADD_PRODUCT_TO_CART, REQUEST_NEW_ORDER, CONFIRM_NEW_ORDER, SET_SHIPPING_RATE} from '../actions/market'

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

const INITIAL_STATE = {
  cart: []
}

function market(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SHIPPING_RATE: {
      return {
        ...state,
        shippingRate: action.shippingRate
      }
    }
    case REQUEST_NEW_ORDER: {
      return {
        ...state,
      }
    }
    case CONFIRM_NEW_ORDER: {
      return {
        ...state,
        confirmedOrder: action.confirmedOrder,
        cart: []
      }
    }
    case REQUEST_PRODUCTS: {
      return {
        ...state,
      }
    }
    case RECEIVE_PRODUCTS: {
      return {
        ...state,
        products: action.products
      }
    }
    case ADD_PRODUCT_TO_CART: {
      const newCart = [...state.cart]
      newCart.push(action.product)
      return {
        ...state,
        cart: newCart
      }
    }

    default: {
      return state
    }
  }
}

export default market
