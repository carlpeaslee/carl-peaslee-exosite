import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'


import ui from './ui'
import market from './market'

const reducers = combineReducers({
  ui,
  market,
  form: formReducer
})

export default reducers
