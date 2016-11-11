export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  }
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export function receiveProducts(products) {
  products.forEach( (product, index, original)=> {
    product.features = JSON.parse(product.features)
  })
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export function addProductToCart(product){
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  }
}


export const REQUEST_NEW_ORDER = 'REQUEST_NEW_ORDER'
export function requestNewOrder() {
  console.log('requestNewOrder action')
  return {
    type: REQUEST_NEW_ORDER,
  }
}

export const CONFIRM_NEW_ORDER = 'CONFIRM_NEW_ORDER'
export function confirmNewOrder(order) {
  console.log('confirmNewOrder action',order)
  return {
    type: CONFIRM_NEW_ORDER,
    confirmedOrder: order
  }
}

export const SET_SHIPPING_RATE = 'SET_SHIPPING_RATE'
export function setShippingRate(shippingRate) {
  return {
    type: SET_SHIPPING_RATE,
    shippingRate
  }
}
