import React, {Component, PropTypes} from 'react'
import Product from './Product'

import cat0 from '../../styles/cat0.png'
import cat1 from '../../styles/cat1.png'
import cat2 from '../../styles/cat2.png'

import S from '../../styles/S'

const baseStyles = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: '100px'
}

const mobileStyles = {
  flexDirection: 'column',
  margin: 'auto'
}

const styles = new S(baseStyles, {}, mobileStyles)

class AllProducts extends Component {

  static defaultProps = {
    products: []
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    openCart: PropTypes.func.isRequired,
  }
  populateProductList() {
    if(this.props.products) {
      const products = []
      const images = [cat0, cat1, cat2]
      this.props.products.forEach((product, index)=>{
        products.push(
          <Product
            key={product.productId}
            image={images[index]}
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
