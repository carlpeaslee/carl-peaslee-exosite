import TTTMove from '../models/TTTMove'
import {
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql'

const submitMove =  {
  type: GraphQLString,
  args: {
    moveId: {
      type: GraphQLID
    },

    matchId: {
      type: GraphQLID
    },

    playerId: {
      type: GraphQLID
    },

    position: {
      type: GraphQLInt
    },
  },
  resolve: (source, args, context) => {
    console.log('submitMove permissions', context.permissions)
    addMove(args.moveId, args.matchId, args.playerId, args.position)
    return "move submitted, good job"
  }
}



export function addMove(moveId, matchId, playerId, position) {
  console.log('addMove')
  TTTMove.build({
    moveId,
    matchId,
    playerId,
    position
  })
  .save()
  .then( (anotherTask) => {
    return "wow success!"
  })
  .catch( (error) => {
    console.log(error)
  })
}

export default submitMove
