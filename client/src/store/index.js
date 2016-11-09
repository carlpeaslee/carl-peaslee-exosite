import { createStore, compose } from 'redux'
//import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'

//const sagaMiddleware = createSagaMiddleware()


const configureStore = () => {
  return createStore(
    reducers,
    compose(
      // applyMiddleware(
      //   sagaMiddleware,
      // ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  )
}

const store = configureStore()

export default store
