import sequelize from 'sequelize';
import db from '../db';

const Match = db.define('Match', {

  matchId: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false
  }

});

export default Match
