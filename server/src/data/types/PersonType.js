import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from 'graphql'


const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    personId: {
      type: GraphQLID
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
  }
})

export default PersonType
