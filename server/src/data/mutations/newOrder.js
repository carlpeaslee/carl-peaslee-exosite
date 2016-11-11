import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
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
      type: GraphQLFloat
    },
    shippingRate: {
      type: GraphQLFloat
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
    return Order.build({
      orderId: uuid.v4(),
      associatedPersonId: args.associatedPersonId || uuid.v4(),
      products: args.products,
      totalBeforeShipping: args.totalBeforeShipping,
      shippingRate: args.shippingRate,
      shippingName: args.shippingName,
      street: args.street,
      city: args.city,
      state: args.state,
      zipCode: args.zipCode,
    })
    .save()
    .then( (result) => {
      console.log('New Order added to db', result)
      return JSON.stringify(result.dataValues)
    })
    .catch( (error) => {
      console.log('newOrder error: \n', error)
    })
  }
}

export default newOrder
