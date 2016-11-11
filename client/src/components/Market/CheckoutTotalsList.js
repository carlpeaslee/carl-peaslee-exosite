import React, { Component, PropTypes } from 'react'

import ShoppingCart from './ShoppingCart'
import ShippingTotal from './ShippingTotal'
import OrderTotal from './OrderTotal'

import S from '../../styles/S'

const listBase = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '40%',
  margin: '10px',
  backgroundColor: 'rgba(255,255,255, .8)',
  borderRadius: '10px',
}
const listMobile = {
  margin: '20px',
  maxWidth: '100%'
}

const listStyle = new S(listBase, {}, listMobile)


class CheckoutTotalsList extends Component {

  static PropTypes = {
    cart: PropTypes.array.isRequired,
    setShippingRate: PropTypes.func.isRequired
  }

  render() {
    return (

        <div
          style={{
            ...listStyle.all
          }}
        >
          <ShoppingCart
            cart={this.props.cart}
          />
          <ShippingTotal
            shippingValues={this.props.shippingValues}
            setShippingRate={this.props.setShippingRate}
          />
          <OrderTotal
            cart={this.props.cart}
          />
        </div>
    );
  }
}

export default CheckoutTotalsList
