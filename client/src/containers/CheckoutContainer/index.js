import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addProductToCart, requestNewOrder, setShippingRate} from '../../actions/market'

import ShoppingCart from '../../components/Market/ShoppingCart'
import ShippingTotal from '../../components/Market/ShippingTotal'
import ShippingForm from '../../components/Market/ShippingForm'
import OrderTotal from '../../components/Market/OrderTotal'



class CheckoutContainer extends Component {

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '60px',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            margin: '20px',
            backgroundColor: 'rgba(255,255,255, .8)',
            borderRadius: '10px',
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            margin: '20px',
            backgroundColor: 'rgba(255,255,255, .8)',
            borderRadius: '10px',
          }}
        >
          <ShippingForm
            cart={this.props.cart}
            requestNewOrder={this.props.requestNewOrder}
            confirmedOrder={this.props.confirmedOrder}
            router={this.props.router}
          />
        </div>
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
