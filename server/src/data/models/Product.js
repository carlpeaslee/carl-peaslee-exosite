import sequelize from 'sequelize';
import db from '../db';

const Product = db.define('product', {

  productId: {
    type: sequelize.UUID,
    primaryKey: true,
    default: sequelize.UUIDV4,
  },

  title: {
    type: sequelize.STRING,
    notNull: true,
  },

  price: {
    type: sequelize.DECIMAL,
    notNull: true,
  },

  description: {
    type: sequelize.STRING,
    notNull: true,
  },

  features: {
    type: sequelize.JSON,
    notNull: true,
  },

});

export default Product
