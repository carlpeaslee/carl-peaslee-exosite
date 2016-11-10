import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const CheckoutButton = () => {

  return (
    <Link
      to={'checkout'}
    >
      <RaisedButton
      label="Checkout"
      primary={true}
      style={{color: 'white'}} />
    </Link>
  )
}

export default CheckoutButton
