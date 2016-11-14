import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import DevTools from '../containers/DevTools';
import reducers from '../reducers'

import {rootSaga} from '../actions/saga'

const sagaMiddleware = createSagaMiddleware()


const INITIAL_STATE = {
  form: {
    shipping: {
      values: {
        state: null
      }
    }
  }
}

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
);

const configureStore = () => {

  const store = createStore(reducers, INITIAL_STATE, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

const store = configureStore()

sagaMiddleware.run(rootSaga)

export default store
