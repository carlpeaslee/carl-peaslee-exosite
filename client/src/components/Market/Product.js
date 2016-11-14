import React, {Component, PropTypes} from 'react'
import AddToCartButton from './AddToCartButton'

import S from '../../styles/S'

const baseStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '33%',
  minHeight: '400px',
  margin: '10px',
  backgroundColor: 'rgba(255,255,255, .8)',
  borderRadius: '10px',
  overflow: 'hidden',
}

const mobileStyles = {
  maxWidth: '70%',
  margin: 'auto',
  marginTop: '15px',
  marginBottom: '15px'
}

const productStyles = new S(baseStyles, {}, mobileStyles)

class Product extends Component {

  static propTypes = {
    product: PropTypes.object.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    openCart: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.object.isRequired,
  }

  displayFeatures() {
    if (this.props.features) {
      const features = this.props.features
      const featureList = []
      let featureKey = 0  // eslint-disable-next-line
      for (const feature in features) {
        featureList.push(
          <li
            key={featureKey}
          >{feature + ': ' + features[feature]}</li>
        )
        featureKey++
      }
      return (
        <ul>
          {featureList}
        </ul>
      )
    }
  }
  render() {
    return (
      <div
        style={{
          ...productStyles.all
        }}
      >
        <img
          src={this.props.image}
          alt={"An angry cat eating a banana"}
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto',
            maxWidth: '300px'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            marginBottom: 'auto',
            minHeight: '180px',
            maxWidth: '300px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h2>
              {this.props.title}
            </h2>
            <h3>
              {'$'+this.props.price.toFixed(2)}
            </h3>
          </div>
          <p><i>
            {this.props.description}
          </i></p>

          {this.displayFeatures()}
        </div>
        <div
          // style={{
          //   height: '20%'
          // }}
        >
          <AddToCartButton
            addProductToCart={this.props.addProductToCart}
            product={this.props.product}
            openCart={this.props.openCart}
          />
        </div>
      </div>
    )
  }
}

export default Product
