import {apiUrl, fetchOptions} from '../utils/fetch'
import fetch from 'isomorphic-fetch'
import {requestProducts, receiveProducts, confirmNewOrder} from './market'
import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'



export function fetchProductsCall() {
  fetchOptions.body = JSON.stringify({
    query:'{getAllProducts{productId,title,price,description,features}}',
  })
  return fetch(apiUrl, fetchOptions).then( (response) => {
    return response.json()
  }).then((json) => {
      return json.data.getAllProducts
  })

}


export function* fetchProducts() {
  yield put( requestProducts() )
  const products = yield call(fetchProductsCall)
  yield put( receiveProducts(products) )
}

export function* newOrderCall() {
  console.log('newOrderCall')
  try {
    // fetchOptions.body = JSON.stringify({
    //   mutation:'{newOrder(
    //     associatedPersonId: args.associatedPersonId,
    //     products: args.products,
    //     totalBeforeShipping: args.totalBeforeShipping,
    //     shipping: args.shipping,
    //     shippingName: args.shippingName,
    //     street: args.street,
    //     city: args.city,
    //     state: args.state,
    //     zipCode: args.zipCode,
    // ){productId,title,price,description,features}}',
    // })
    const confirmedOrder = yield fetch(apiUrl, fetchOptions).then( (response) => {
      return response.json()
    }).then((json) => {
        return json.data.getAllProducts
    })
    yield put(confirmNewOrder(confirmedOrder))
  } catch (error) {
    console.log('error', error)
  }
}



export function* newOrder() {
  yield* takeEvery("REQUEST_NEW_ORDER", newOrderCall);
}




export function* startup() {
  yield call(fetchProductsCall)
}


export function* rootSaga() {
  yield [
    fetchProducts(),
    newOrder()
  ]
}
