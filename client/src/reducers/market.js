const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

function market(state = {}, action) {
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
    default: {
      return state
    }
  }
}

export default market
