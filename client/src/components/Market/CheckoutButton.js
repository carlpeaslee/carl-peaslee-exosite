import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const CheckoutButton = (props) => {

  return (
    <Link
      to={'checkout'}
      onClick={props.closeCart}
    >
      <RaisedButton
        label="Checkout"
        primary={true}
        style={{color: 'white', margin: '10px'}}
      />
    </Link>
  )
}

export default CheckoutButton
