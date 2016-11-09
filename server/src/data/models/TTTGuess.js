import sequelize from 'sequelize';
import db from '../db';

import Match from './Match'
import Player from './Player'


const TTTGuess = db.define('TTTGuess', {

  guessId: {
    type: sequelize.STRING,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false
  },

  matchId: {
    type: sequelize.STRING,
    allowNull: false,
    // references: {
    //   model: Match,
    //   key: 'matchId'
    // }
  },

  playerId: {
    type: sequelize.STRING,
    // allowNull: false,
    // references: {
    //   model: Player,
    //   key: 'playerId'
    // }
  },

  guessedRobot: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },

});

export default TTTGuess
