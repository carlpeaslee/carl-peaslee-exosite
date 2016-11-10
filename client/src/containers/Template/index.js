import React, { Component } from 'react'
import {connect} from 'react-redux'

import '../../styles/exoStyles.css'
// import '../../styles/index.scss'


import {openDrawer, closeDrawer} from '../../actions/ui'

import DevTools from '../DevTools'

import NavDrawer from '../../components/Template/NavDrawer'
import TopAppBar from '../../components/Template/TopAppBar'

class Template extends Component {
  render() {
    return (
      <div>
      <DevTools/>
        <header>
          <TopAppBar
            openDrawer={this.props.openDrawer}
            closeDrawer={this.props.closeDrawer}
            drawerOpen={this.props.drawerOpen}
          />

        </header>
        <div
          className={'flex--direction-row flex--shrink-0'}
        >
        <nav
          className={' util__layout--container-x-small flex--direction-column flex--shrink-0'}
        >
          <NavDrawer
            closeDrawer={this.props.closeDrawer}
            drawerOpen={this.props.drawerOpen}
          />
        </nav>

        <div
          className={'util__p-vertical--medium util__layout--scrollable-y flex--direction-column flex--grow-1'}
        >

        </div>
        <main
          className={'util__layout--container'}
        >
          {this.props.children}
        </main>
      </div>
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
