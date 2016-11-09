import db from '../db'
import Cart from './Cart'
import Person from './Person'
import Order from './Order'
import Product from './Product'

function sync(...args) {
  return db.sync(...args);
}

export default { sync };
