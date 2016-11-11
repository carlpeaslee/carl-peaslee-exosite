import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routing from '../Routing'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  green500
} from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  raisedButton: {
    secondaryColor: green500,
  },
})



class Mui extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Routing/>
      </MuiThemeProvider>
    );
  }
}

export default Mui
