import React, {Component} from 'react'
import Product from './Product'

import S from '../../styles/S'

const baseStyles = {
  display: 'flex',
  width: '66%',
  alignItems: 'stretch',
  justifyItems: 'center',
  margin: 'auto'
}

const styles = new S(baseStyles)

class AllProducts extends Component {


  populateProductList() {
    if(this.props.products) {
      const products = []
      this.props.products.forEach((product)=>{
        products.push(
          <Product
            key={product.productId}
            product={product}
            title={product.title}
            price={product.price}
            description={product.description}
            features={product.features}
            addProductToCart={this.props.addProductToCart}
            openCart={this.props.openCart}
          />
        )
      })
      return products
    }
  }
  render() {
    return (
      <div
        style={{...styles.all}}
      >
        {this.populateProductList()}
      </div>
    )
  }
}

export default AllProducts
