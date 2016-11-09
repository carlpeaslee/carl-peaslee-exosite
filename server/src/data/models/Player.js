import sequelize from 'sequelize';
import db from '../db';

const Player = db.define('Player', {

  playerId: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false
  },

});

export default Player
