import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addProductToCart} from '../../actions/market'

import ShoppingCart from '../../components/Market/ShoppingCart'
import ShippingForm from '../../components/Market/ShippingForm'



class CheckoutContainer extends Component {
  render() {
    return (
      <div>
        <h1>Checkout Container</h1>
        <ShoppingCart
          cart={this.props.cart}
        />
        <ShippingForm
          cart={this.props.cart}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.market.products,
    cart: state.market.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch(addProductToCart(product))
    },
  }
}

CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer)

export default CheckoutContainer
