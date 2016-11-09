import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../../store'

import Mui from '../Mui'

class App extends Component {
  render() {
    return (
        <Provider
          store={store}
        >
          <Mui />
        </Provider>
    )
  }
}

export default App
