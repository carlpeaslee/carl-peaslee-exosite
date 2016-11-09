import {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType
} from 'graphql'

import ProductType from './ProductType'

const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: 'An order in the database',
  fields: {
    orderId: {
      type: GraphQLID
    },
    associatedPersonId: {
      type: GraphQLID
    },
    products: {
      type: new GraphQLList(ProductType)
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
  }
})

export default OrderType
