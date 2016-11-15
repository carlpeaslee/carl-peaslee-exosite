import React, {Component} from 'react'

class OrderTotal extends Component {
  constructor(props) {
    super(props)
    this.cart = this.props.cart
    this.cartSubtotal = 0
    this.shippingRate = 5.99
    this.orderTotal = this.calculateTotalWithShipping(this.currentCartSubtotal, this.shippingRate)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.shippingRate || nextProps.shippingRate === 0) {
      this.orderTotal = this.calculateTotalWithShipping(this.currentCartSubtotal, nextProps.shippingRate)
    }
  }

  get currentCartSubtotal() {
    if (this.cart) {
      this.cartSubtotal = 0
      const cart = this.cart
      cart.forEach( (product)=> {
        this.cartSubtotal += product.price
      })
      return this.cartSubtotal
    }
  }


  calculateTotalWithShipping = (subTotal, shipping) => {
    return subTotal + shipping
  }

  render() {
    console.log(this.orderTotal)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '30px',
          marginTop: '15px'

        }}
      >
        <h3
          style={{
            alignSelf: 'flex-end'
          }}
        >
          {'Order Total: $ ' + this.orderTotal.toFixed(2)}
        </h3>
      </div>
    )
  }
}

export default OrderTotal
