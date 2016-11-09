import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
} from 'graphql'

const TTTMoveType = new GraphQLObjectType({
  name: 'TTTMove',
  description: 'An object that describes a move in a tictactoe game',
  fields: {
    moveId: GraphQLID,

    matchId: GraphQLID,

    playerId: GraphQLID,

    position: GraphQLInt,
  }
})

export default TTTMoveType
