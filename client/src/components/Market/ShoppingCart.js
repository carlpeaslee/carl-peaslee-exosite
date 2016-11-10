import React, {Component} from 'react'

class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.cartSubtotal = 0
  }

  get currentCartSubtotal() {
    if (this.props.cart) {
      const cart = this.props.cart
      cart.forEach( (product)=> {
        this.cartSubtotal += product.price
        console.log('subtotal', this.cartSubtotal)
      })
      console.log('subtotal', this.cartSubtotal)
      return this.cartSubtotal
    }
  }


  displayCart() {
    if (this.props.cart) {
      const cart = this.props.cart
      const productList = []
      let cartKey = 0
      cart.forEach( (product)=> {
        productList.push(
          <div
            key={cartKey}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottom: '1px dotted grey',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
          >
            <b>{product.title}</b>
            <span>{'$ ' + product.price}</span>
          </div>
        )
        cartKey++
      })
      return (
        <div>
          {productList}
        </div>
      )
    }
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '400px',
          minWidth: '300px',
          margin: '20px',
          marginBottom: '5px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 'auto'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottom: '1px solid grey',
              paddingTop: '10px',
              paddingBottom: '5px'
            }}
          >
            <h3
            style={{
              margin: '3px'
            }}
            >
              Shopping Cart
            </h3>
          </div>
          {this.displayCart()}

        </div>
        <h4
          style={{
            margin: '3px',
            alignSelf: 'flex-end'
          }}
        >
          {'Current Total: $'+this.currentCartSubtotal}
        </h4>
      </div>
    )
  }
}

export default ShoppingCart
