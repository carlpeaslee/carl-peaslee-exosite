import React, {Component} from 'react'


import S from '../../styles/S'

const cartBase = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '300px',
  maxWidth: '100%',
  minWidth: '20%',
  margin: '30px',
  marginBottom: '5px'
}
const cartMobile = {

}

const cartStyle = new S(cartBase, {}, cartMobile)

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
      })
      return this.cartSubtotal
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.cartSubtotal = 0
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
            <span>{'$ ' + product.price.toFixed(2)}</span>
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
          ...cartStyle.all
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
            alignSelf: 'flex-end'
          }}
        >
          {'Subtotal: $'+this.currentCartSubtotal.toFixed(2)}
        </h4>
      </div>
    )
  }
}

export default ShoppingCart
