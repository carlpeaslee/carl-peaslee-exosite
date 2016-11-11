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
  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const configureStore = () => {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, INITIAL_STATE, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    )
  }

  return store
}

const store = configureStore()

sagaMiddleware.run(rootSaga)

export default store
