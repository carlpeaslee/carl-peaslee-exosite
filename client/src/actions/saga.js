import {apiUrl, fetchOptions} from '../utils/fetch'
import fetch from 'isomorphic-fetch'
import {requestProducts, receiveProducts, requestNewOrder, confirmNewOrder} from './market'
import { put, call } from 'redux-saga/effects'


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

export function newOrderCall() {
  fetchOptions.body = JSON.stringify({
    query:'{newOrder{productId,title,price,description,features}}',
  })
  return fetch(apiUrl, fetchOptions).then( (response) => {
    return response.json()
  }).then((json) => {
      return json.data.getAllProducts
    })

}

export function* newOrder() {
  yield put( requestNewOrder() )
  const result = yield call(newOrderCall)
  yield put( confirmNewOrder(result) )
}


export function* startup() {
  yield call(fetchProductsCall)
}


export function* rootSaga() {
  yield [
    fetchProducts()
  ]
}
