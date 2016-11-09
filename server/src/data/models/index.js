import db from '../db'
import BlogPost from './BlogPost'
import Person from './Person'
import TTTMove from './TTTMove'
import TTTGuess from './TTTGuess'
import Player from './Player'
import Match from './Match'


function sync(...args) {
  return db.sync(...args);
}

export default { sync };
