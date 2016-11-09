import sequelize from 'sequelize';
import db from '../db';

const Order = db.define('order', {

  orderId: {
    type: sequelize.UUID,
    primaryKey: true,
    default: sequelize.UUIDV4,
  },

  associatedPersonId: {
    type: sequelize.STRING,
  },

  products: {
    type: sequelize.STRING,
    notNull: true,
  },

  totalBeforeShipping: {
    type: sequelize.INTEGER,
    notNull: true,
  },

  shipping: {
    type: sequelize.INTEGER,
    notNull: true,
  },

  shippingName: {
    type: sequelize.STRING,
  },

  street: {
    type: sequelize.STRING,
  },

  city: {
    type: sequelize.STRING,
  },

  state: {
    type: sequelize.STRING,
  },

  zipCode: {
    type: sequelize.STRING,
  },

});

export default Order
