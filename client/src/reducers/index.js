import {combineReducers} from 'redux'

import ui from './ui'
import market from './market'

const reducers = combineReducers({
  ui,
  market
})

export default reducers
