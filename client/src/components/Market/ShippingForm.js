import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import states from '../../helpers/states'
import RaisedButton from 'material-ui/RaisedButton'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'street', 'city', 'state', 'zipCode' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  const stateValue = values['state'] ? values['state'].toUpperCase() : null

  const checkForMatch = (state) => { // eslint-disable-next-line
    return state == stateValue
  }

  if (states.find(checkForMatch) !== stateValue) {
    errors['state'] = 'Invalid'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const fullWidth = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '15px'
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <label>{label}</label>
      {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span style={{color: 'green'}}>{warning}</span>))}
    </div>
    <input
      {...input}
      placeholder={label}
      type={type}
      style={{
        width: '100%'
      }}
    />
  </div>
)

const city = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '2',
      marginTop: '15px'
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <label>{label}</label>
      {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span style={{color: 'green'}}>{warning}</span>))}
    </div>
    <input
      {...input}
      placeholder={label}
      type={type}
      style={{
        width: '100%'
      }}
    />
  </div>
)

const state = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      marginTop: '15px'
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <label>{label}</label>
      {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span style={{color: 'green'}}>{warning}</span>))}
    </div>
    <input
      {...input}
      placeholder={label}
      type={type}
      style={{
        width: '100%'
      }}
    />
  </div>
)



class ShippingForm extends Component {
  constructor(props) {
    super(props)
    this.requestNewOrder = this.props.requestNewOrder.bind(this)
    this.redirect = this.props.router.push.bind(this)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.confirmedOrder) {
      this.redirect('receipt')
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.requestNewOrder()
  }


  render() {
    console.log(this.props)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100%',
          margin: '20px',
          backgroundColor: 'rgba(255,255,255, .8)',
          borderRadius: '10px',
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            margin: '30px',
          }}
        >
          <Field
            name="name"
            type="text"
            component={fullWidth}
            label="Name"
          />

          <Field name="street" type="text" component={fullWidth} label="Street"/>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Field name="city" type="text" component={city} label="City"/>

            <Field name="state" type="text" component={state} label="State"/>
          </div>


          <Field name="zipCode" type="text" component={fullWidth} label="Zip Code"/>

          <RaisedButton
            type="submit"
            style={{
              display: 'flex',
              alignSelf: 'flex-end',
              width: '50%',
              marginTop: '15px'
            }}
            disabled={(this.props.invalid && !this.props.submitting)}
          >
            Submit
          </RaisedButton>

        </form>
        </div>
    );
  }
}


ShippingForm = reduxForm({
  form: 'shipping',
  validate,
  warn,
  destroyOnUnmount: false
})(ShippingForm)

export default ShippingForm
