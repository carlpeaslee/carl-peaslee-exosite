import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Template from '../containers/Template'

import Home from '../views/Home'
import Help from '../views/Help'
import Market from '../views/Market'

export const createRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route
        path="/market"
        component={Market}
      />
      <Route
        path="/help"
        component={Help}
      />
    </Route>
  )
}

export default createRoutes
