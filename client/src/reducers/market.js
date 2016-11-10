import {ADD_PRODUCT_TO_CART} from '../actions/market'

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

const INITIAL_STATE = {
  cart: []
}

function market(state = INITIAL_STATE, action) {
  switch (action.type) {
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
