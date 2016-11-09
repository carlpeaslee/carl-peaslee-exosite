import sequelize from 'sequelize';
import db from '../db';

const Cart = db.define('cart', {

  ownerId: {
    type: sequelize.UUID,
    primaryKey: true,
  },

  productId: {
    type: sequelize.UUID,
    notNull: true,
  },

});

export default Cart
