import {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLOutputType,
  GraphQLList,
  GraphQLFloat
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
      type: GraphQLFloat
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
