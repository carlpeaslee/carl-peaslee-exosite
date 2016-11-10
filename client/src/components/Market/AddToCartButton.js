import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const AddToCartButton = (props) => {

  return (
    <RaisedButton
      label="Add to Cart"
      secondary={true}
      style={{color: 'white'}}
      onTouchTap={()=>{
        props.addProductToCart(props.product)
        props.openCart()
      }}
    />
  )
}

export default AddToCartButton
