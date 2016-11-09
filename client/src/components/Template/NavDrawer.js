import React, {Component} from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import {Link} from 'react-router'

class NavDrawer extends Component {
  render(){
    return (
        <Drawer
          open={this.props.drawerOpen}
          docked={false}
          onRequestChange={() => {this.props.closeDrawer()}}
        >
          <Card>
            <CardHeader
              title={"My Account"}
            />
            <CardText>
              Welcome to Carl's Store
            </CardText>

          </Card>


          <Link
            to={'/help'}
          >
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={'Help'}
            />
          </Link>

          <Link
            to={'/market'}
          >
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={'Market'}
            />
          </Link>

        </Drawer>
    )
  }
}

export default NavDrawer
