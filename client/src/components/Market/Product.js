import React, {Component} from 'react'
import booya from '../../styles/booya.png'

class Product extends Component {

  displayFeatures() {
    if (this.props.features) {
      const features = this.props.features
      const featureList = []
      let featureKey = 0
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
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '33%',
          height: '400px',
          margin: '10px'
        }}
      >
        <img
          src={booya}
          alt={"An angry cat eating a banana"}
          style={{
            display: 'flex',
            width: '100%',
            height: 'auto'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
            marginBottom: 'auto'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <h2
            style={{
              margin: '3px'
            }}
            >
              {this.props.title}
            </h2>
            <h3
              style={{
                margin: '3px'
              }}
            >
              {'$'+this.props.price}
            </h3>
          </div>
          <i>
            {this.props.description}
          </i>

          {this.displayFeatures()}
        </div>

        <button
          style={{
            display: 'flex',
            alignSelf: 'flex-end'
          }}
        >
        Add to Cart
        </button>
      </div>
    )
  }
}

export default Product
