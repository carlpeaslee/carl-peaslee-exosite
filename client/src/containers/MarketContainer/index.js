import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addProductToCart} from '../../actions/market'
import {openCart} from '../../actions/ui'


import AllProducts from '../../components/Market/AllProducts'

class MarketContainer extends Component {
  render() {
    return (
      <div>
        <AllProducts
          products={this.props.products}
          addProductToCart={this.props.addProductToCart}
          openCart={this.props.openCart}
        />
        <p
          style={{
            textAlign: 'center'
          }}
        >All products come with a 30-day money back guarantee.</p>
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
    openCart: () => {
      dispatch(openCart())
    },
  }
}

MarketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketContainer)

export default MarketContainer
