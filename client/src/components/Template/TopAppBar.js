import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import {Link} from 'react-router'

import logo from '../../styles/exosite.svg'

import Menu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'


class TopAppBar extends Component {
  handleToggle = () => {
    this.props.drawerOpen ? this.props.closeDrawer() : this.props.openDrawer()
  }

  render(){
    return (
        <AppBar
          iconElementLeft={(
            <IconButton
              onTouchTap={this.handleToggle}
            >
              <Menu
                color={'white'}
              />
            </IconButton>)}
          title={(
            <Link
              to={'/'}
            >
              <img
                src={logo}
                role='presentation'
                style={{
                  verticalAlign: 'middle',
                  maxHeight: '30px',
                  maxWidth: '150px'
                }}
              />
            </Link>
          )}
          style={{
            backgroundColor: 'rgb(34, 39, 54)'
          }}
          
        />
    )
  }
}

export default TopAppBar
