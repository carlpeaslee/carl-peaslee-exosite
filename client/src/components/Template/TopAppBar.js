import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Popover from 'material-ui/Popover'
import {Link} from 'react-router'

import logo from '../../styles/exosite.svg'

import Menu from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart'

import ShoppingCart from '../../components/Market/ShoppingCart'
import CheckoutButton from '../../components/Market/CheckoutButton'

class TopAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  handleDrawerToggle = () => {
    this.props.drawerOpen ? this.props.closeDrawer() : this.props.openDrawer()
  }

  handleCartToggle = (event) => {
      this.setState({
        anchorEl: event.currentTarget,
      });
      // This prevents ghost click.
      event.preventDefault()
      this.props.cartOpen ? this.props.closeCart() : this.props.openCart()
    };

  handleCartClose = () => {
   this.props.closeCart()
  };

  render(){
    return (
        <AppBar
          iconElementLeft={(
            <IconButton
              onTouchTap={this.handleDrawerToggle}
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

          iconElementRight={
            <div
              id='cartDropdown'
            >
              <ShoppingCartIcon
                color={'white'}
                onTouchTap={this.handleCartToggle}
              />
              <Popover
                open={this.props.cartOpen}
                anchorEl={document.getElementById('cartDropdown')}
                onRequestClose={this.handleCartClose}
              >
                <ShoppingCart
                  cart={this.props.cart}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginBottom: '5px'
                  }}
                >
                  <CheckoutButton
                    closeCart={this.props.closeCart}
                  />
                </div>
              </Popover>
            </div>

          }
          iconStyleRight={{
            margin: 'auto'
          }}
          style={{
            backgroundColor: 'rgb(34, 39, 54)'
          }}

        />
    )
  }
}

export default TopAppBar
