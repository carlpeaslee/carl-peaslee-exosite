import {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql'


const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'A product in the database',
  fields: {
    productId: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    description: {
      type: GraphQLString
    },
    features: {
      type: GraphQLString
    },
  }
})

export default ProductType
