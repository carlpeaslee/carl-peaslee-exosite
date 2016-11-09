import React, {Component} from 'react'


import AppBar from 'material-ui/AppBar'

import {Link} from 'react-router'


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
                color={'black'}
              />
            </IconButton>)}
          title={(
            <Link
              to={'/'}
              >Carl's Store
            </Link>
          )}
        />
    )
  }
}

export default TopAppBar
