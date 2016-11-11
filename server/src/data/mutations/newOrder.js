import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql'

import Order from '../models/Order'
import ProductType from '../types/ProductType'
import OrderType from '../types/OrderType'
import uuid from 'uuid'

const newOrder = {
  type: GraphQLString,
  args: {
    orderId: {
      type: GraphQLID
    },
    associatedPersonId: {
      type: GraphQLID
    },
    products: {
      type: GraphQLString
    },
    totalBeforeShipping: {
      type: GraphQLInt
    },
    shipping: {
      type: GraphQLInt
    },
    shippingName: {
      type: GraphQLString
    },
    street: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    },
    zipCode: {
      type: GraphQLString
    },
  },
  resolve: (source, args, context) => {
    console.log('newOrder')
    Order.build({
      orderId: uuid.v4(),
      associatedPersonId: args.associatedPersonId,
      products: args.products,
      totalBeforeShipping: args.totalBeforeShipping,
      shipping: args.shipping,
      shippingName: args.shippingName,
      street: args.street,
      city: args.city,
      state: args.state,
      zipCode: args.zipCode,
    })
    .save()
    .then( (result) => {
      console.log('New Order added to db', result)
      resolve(result)
    })
    .catch( (error) => {
      console.log('newOrder error: \n', error)
    })
  }
}

export default newOrder
