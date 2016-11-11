import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Template from '../containers/Template'

import Home from '../views/Home'
import Help from '../views/Help'
import Market from '../views/Market'
import Checkout from '../views/Checkout'
import Receipt from '../views/Receipt'

export const createRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route
        path="market"
        component={Market}
      />
      <Route
        path='checkout'
        component={Checkout}
      />
      <Route
        path="help"
        component={Help}
      />
      <Route
        path="receipt"
        component={Receipt}
      />
    </Route>
  )
}

export default createRoutes
