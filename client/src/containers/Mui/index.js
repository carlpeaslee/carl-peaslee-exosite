import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from '../Routing'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

class Mui extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Routing/>
      </MuiThemeProvider>
    );
  }
}

export default Mui
