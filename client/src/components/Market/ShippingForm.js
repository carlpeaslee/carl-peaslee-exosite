import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  AutoComplete,
  TextField
} from 'redux-form-material-ui'
import states from '../../helpers/states'



const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'street', 'city', 'state', 'zip' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.state > 3) {
    warnings.age = 'just abbreviation pls'
  }
  return warnings
}

class ShippingForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={TextField} hintText="Name"/>
        <Field name="street" component={TextField} hintText="Street"/>
        <Field name="city" component={TextField} hintText="City"/>
        <Field name="state"
          component={AutoComplete}
          dataSource={states}
          dataSourceConfig={{ text: 'text', value: 'value'}}
          hintText="State"
        />
        <Field name="zipCode" component={TextField} hintText="zipCode"/>

        <button type="submit">Submit</button>
      </form>
    );
  }
}


ShippingForm = reduxForm({
  form: 'shipping',
  validate,
  warn
})(ShippingForm)

export default ShippingForm
