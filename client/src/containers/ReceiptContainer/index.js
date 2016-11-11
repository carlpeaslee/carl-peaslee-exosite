import React, { Component } from 'react'
import {connect} from 'react-redux'
import S from '../../styles/S'


const base = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '60px',
  alignItems: 'center',
}
const mobile = {
  height: '100%',
  margin: '20px'
}

const style = new S(base, {}, mobile)

class ReceiptContainer extends Component {

  render() {
    return (
      <div
        style={{
          ...style.all
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            margin: '20px',
            backgroundColor: 'rgba(255,255,255, .8)',
            borderRadius: '10px',
          }}
        >

          <h3>Order Confirmed</h3>
          <h4>Thanks {this.props.confirmedOrder.shippingName}!</h4>
           <p>Your order number is {this.props.confirmedOrder.orderId}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    confirmedOrder: state.market.confirmedOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

ReceiptContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceiptContainer)

export default ReceiptContainer
