import React, {Component} from 'react'
import S from '../../styles/S'
import Drawer from 'material-ui/Drawer'
import ActionHome from 'material-ui/svg-icons/action/home'
import Shop from 'material-ui/svg-icons/action/store'
import HelpOutline from 'material-ui/svg-icons/action/help-outline'

import ExoMenuItem from './ExoMenuItem'



const navBase = {
  position: 'relative',
  backgroundColor: 'none',
  boxShadow: 'none'
}
const navMobile = {
  backgroundColor: 'rgba(220,220,220,.9)',
  borderRight: 'ridge lightgrey 2px',
  height: '90vh',
}

const navStyle = new S(navBase, {}, navMobile)

class NavDrawer extends Component {
  render(){
    return (
      <Drawer
        open={this.props.drawerOpen}
        docked={false}
        onRequestChange={() => {this.props.closeDrawer()}}
        containerStyle={{
          ...navStyle.all
        }}
        overlayStyle={{
          display: 'none'
        }}
        containerClassName={'menu'}
      >
        <div
          className={'menu__menu-item'}
        >

          <ExoMenuItem
            title={'Home'}
            to={'/'}
            onlyActiveOnIndex={true}
            icon={(
              <ActionHome
                style={{
                  fill: 'inherit'
                }}
              />
            )}
          />

          <ExoMenuItem
            title={'Market'}
            to={'/market'}
            icon={(
              <Shop
                style={{
                  fill: 'inherit'
                }}
              />
            )}
          />

          <ExoMenuItem
            title={'Help'}
            to={'/help'}
            icon={(
              <HelpOutline
                style={{
                  fill: 'inherit'
                }}
              />
            )}
          />

        </div>
      </Drawer>
    )
  }
}

export default NavDrawer
