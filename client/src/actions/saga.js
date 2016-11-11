import {apiUrl, fetchOptions} from '../utils/fetch'
import fetch from 'isomorphic-fetch'
import {requestProducts, receiveProducts, confirmNewOrder} from './market'
import { put, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import store from '../store'


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
    const appState = store.getState()
    const form = appState.form.shipping.values
    const products = appState.market.cart
    const totalBeforeShipping = () => {
      let runningTotal = 0
      products.forEach( (product)=> {
        runningTotal += product.price
      })
      return runningTotal
    }
    const shippingRate = appState.market.shippingRate
    const shippingName = form.name
    const street = form.street
    const city = form.city
    const state = form.state
    const zipCode = form.zipCode
    fetchOptions.body = JSON.stringify({query:'mutation{newOrder(products:"'+products+'",totalBeforeShipping: '+totalBeforeShipping()+',shippingRate: '+shippingRate+',shippingName: "'+shippingName+'",street: "'+street+'",city: "'+city+'",state: "'+state+'",zipCode: "'+zipCode+'")}',
    })
    const confirmedOrder = yield fetch(apiUrl, fetchOptions).then( (response) => {
      return response.json()
    }).then((json) => {
        return JSON.parse(json.data.newOrder)
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
