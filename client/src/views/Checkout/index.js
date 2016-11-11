import React from 'react'
import CheckoutContainer from '../../containers/CheckoutContainer'


function Checkout (props) {
  return (
    <section>
      <CheckoutContainer
        router={props.router}
      />
    </section>
  )
}

export default Checkout
