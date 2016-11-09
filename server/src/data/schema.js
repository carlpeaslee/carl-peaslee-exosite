import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import getAllProducts from './queries/getAllProducts'
import newOrder from './mutations/newOrder'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'The root query',
  fields: {
    getAllProducts
  }
})


const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    newOrder: newOrder
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
