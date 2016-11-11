import React, {Component} from 'react'

class ShippingTotal extends Component {
  constructor(props) {
    super(props)
    if (this.props.shippingValues){
      this.shippingState = this.props.shippingValues.state
    }
    this.setShippingRate = this.props.setShippingRate.bind(this)
    this.shippingCost = 5.99
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.shippingValues && nextProps.shippingValues.state !== this.shippingState) {
      this.shippingCost = this.calculateShippingCost(nextProps.shippingValues.state)
      this.setShippingRate(this.shippingCost)
    }
  }

  calculateShippingCost = (shippingState) => {
    switch (shippingState) {
      case 'MN': {
        return 0
      }
      case 'GA':
      case 'AL':
      case 'FL': {
        return 3.99
      }
      case 'NY':
      case 'CA':
      case 'MA': {
        return 7.50
      }
      default: {
        return 5.99
      }
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '50px',
          margin: '30px',
          marginBottom: '5px'
        }}
      >
        <h4
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <i>{'Shipping Cost: $ ' + this.shippingCost.toFixed(2)}</i>
        </h4>
      </div>
    )
  }
}

export default ShippingTotal
