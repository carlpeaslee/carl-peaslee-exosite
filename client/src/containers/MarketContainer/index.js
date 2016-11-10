import React, { Component } from 'react'
import {connect} from 'react-redux'

import AllProducts from '../../components/Market/AllProducts'

class MarketContainer extends Component {
  render() {
    return (
      <div>
        <AllProducts
          products={this.props.products}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.market.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

MarketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketContainer)

export default MarketContainer
