import React, { Component } from 'react'
import {connect} from 'react-redux'

import {openDrawer, closeDrawer} from '../../actions/ui'

import NavDrawer from '../../components/Template/NavDrawer'
import TopAppBar from '../../components/Template/TopAppBar'

class Template extends Component {
  render() {
    return (
      <div>
        <header>
          <TopAppBar
            openDrawer={this.props.openDrawer}
            closeDrawer={this.props.closeDrawer}
            drawerOpen={this.props.drawerOpen}
          />
        </header>
        <nav>
          <NavDrawer
            closeDrawer={this.props.closeDrawer}
            drawerOpen={this.props.drawerOpen}
          />
        </nav>


        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.ui.drawerOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openDrawer: () => {
      dispatch(openDrawer())
    },
    closeDrawer: () => {
      dispatch(closeDrawer())
    },
  }
}

Template = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template)

export default Template
