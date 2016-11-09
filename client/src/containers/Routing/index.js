import React, { Component } from 'react'
import {Router, browserHistory} from 'react-router'
import Template from '../Template'
import createRoutes from '../../routes'

const routes = createRoutes()

class Routing extends Component {
  render() {
    return (
      <Router
        routes={routes}
        history={browserHistory}
      >
        <Template/>
      </Router>
    );
  }
}

export default Routing
