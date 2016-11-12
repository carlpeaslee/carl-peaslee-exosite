import sequelize from 'sequelize';
import db from '../db';

const Person = db.define('person', {

  personId: {
    type: sequelize.UUID,
    primaryKey: true,
    default: Sequelize.UUIDV4,
  },

  auth0Id: {
    type: sequelize.STRING,
  },

  email: {
    type: sequelize.STRING,
    isEmail: true,
    notNull: true,
  },

  name: {
    type: sequelize.STRING,
    notNull: true,
  },


});

export default Person
