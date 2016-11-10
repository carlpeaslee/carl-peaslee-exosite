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
