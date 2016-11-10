import React, {Component} from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import ActionHome from 'material-ui/svg-icons/action/home'
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
import HelpOutline from 'material-ui/svg-icons/action/help-outline'

import {Link, IndexLink} from 'react-router'

const menuItemStyle = {
  border: '10px',
  boxSizing: 'border-box',
  display: 'block',
  fontFamily: 'RobotoDraft, Roboto, "Open Sans", "Segoe UI", Candara, "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
  'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
  cursor: 'pointer',
  textDecoration: 'none',
  margin: '0px',
  padding: '0px',
  outline: 'none',
  fontSize: '20px',
  fontWeight: 'inherit',
  transform: 'translate(0px, 0px)',
  lineHeight: '48px',
  position: 'relative',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  whiteSpace: 'nowrap',
  background: 'none',
  color: 'rgb(92, 93, 96)'
}

class NavDrawer extends Component {
  render(){
    return (
        <Drawer
          open={this.props.drawerOpen}
          docked={false}
          onRequestChange={() => {this.props.closeDrawer()}}
          containerStyle={{
            position: 'relative',
            backgroundColor: 'none',
            boxShadow: 'none'
          }}
          overlayStyle={{
            display: 'none'
          }}
          containerClassName={'menu'}
        >
          <div
            className={'menu__menu-item'}
          >
            <Link
              to={'/'}
              style={menuItemStyle}
              onlyActiveOnIndex={true}
              activeStyle={{
                ...menuItemStyle,
                color: 'rgb(44, 157, 182)',
                fill: 'rgb(44, 157, 182)',
              }}
            >
              <MenuItem
              style={{
                color: 'inherit',
                fontSize: 'inherit'
              }}
              leftIcon={
                <ActionHome
                  style={{
                    fill: 'inherit'
                  }}
                />
              }
              >
                Home
              </MenuItem>
            </Link>
          </div>

          <div
            className={'menu__menu-item'}
          >
            <Link
              to={'/market'}
              style={menuItemStyle}
              activeStyle={{
                ...menuItemStyle,
                color: 'rgb(44, 157, 182)',
                fill: 'rgb(44, 157, 182)',
              }}

            >
            <MenuItem
            style={{
              color: 'inherit',
              fontSize: 'inherit'
            }}
            leftIcon={
              <ShoppingCart
                style={{
                  fill: 'inherit'
                }}
              />
            }
            >
              Market
            </MenuItem>
            </Link>
          </div>

          <div
            className={'menu__menu-item'}
          >
            <Link
              to={'/help'}
              style={menuItemStyle}
              activeStyle={{
                ...menuItemStyle,
                color: 'rgb(44, 157, 182)',
                fill: 'rgb(44, 157, 182)',
              }}
            >
            <MenuItem
            style={{
              color: 'inherit',
              fontSize: 'inherit'
            }}
            leftIcon={
              <HelpOutline
              style={{
                fill: 'inherit'
              }}
              />
            }
            >
              Help
            </MenuItem>
            </Link>
          </div>



        </Drawer>
    )
  }
}

export default NavDrawer
