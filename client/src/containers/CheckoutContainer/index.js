import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addProductToCart, requestNewOrder, setShippingRate} from '../../actions/market'

import CheckoutTotalsList from '../../components/Market/CheckoutTotalsList'
import ShippingForm from '../../components/Market/ShippingForm'

import S from '../../styles/S'

const containerBase = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}
const containerMobile = {
  flexDirection: 'column',
  margin: 'auto'
}

const containerStyle = new S(containerBase, {}, containerMobile)

class CheckoutContainer extends Component {

  render() {
    return (
      <div
        style={{
          ...containerStyle.all
        }}
      >
        <CheckoutTotalsList
          cart={this.props.cart}
          shippingValues={this.props.shippingValues}
          setShippingRate={this.props.setShippingRate}
          shippingRate={this.props.shippingRate}
        />


        <ShippingForm
          cart={this.props.cart}
          requestNewOrder={this.props.requestNewOrder}
          confirmedOrder={this.props.confirmedOrder}
          router={this.props.router}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.market.products,
    cart: state.market.cart,
    shippingValues: state.form.shipping.values,
    shippingRate: state.market.shippingRate,
    confirmedOrder: state.market.confirmedOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch(addProductToCart(product))
    },
    setShippingRate: (shippingRate) => {
      dispatch(setShippingRate(shippingRate))
    },
    requestNewOrder: () => {
      dispatch(requestNewOrder())
    }
  }
}

CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer)

export default CheckoutContainer
