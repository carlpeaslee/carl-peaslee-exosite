import Product from './models/Product'
import uuid from 'uuid'

const defaultProducts = () => {
  Product.findOrCreate({
    where: {
      title: 'Widget'
    },
    defaults: {
      productId: uuid.v4(),
      price: 9.89,
      description: 'Awesome',
      features: {
        cool: 'definitely'
      }
    }
  }).then( (instance, created) => {
    if (created) {console.log("We created it!")}
  })

  Product.findOrCreate({
    where: {
      title: 'Doodad'
    },
    defaults: {
      productId: uuid.v4(),
      price: 12.66,
      description: 'Pretty Good',
      features: {
        fun: 'mostly',
        dangerous: 'yes very dangerous'
      }
    }
  }).then( (instance, created) => {
    if (created) {console.log("We created it!")}
  })

  Product.findOrCreate({
    where: {
      title: 'Whirlygig'
    },
    defaults: {
      productId: uuid.v4(),
      price: 31.80,
      description: 'what an incredible thing this is',
      features: {
        cool: 'no',
        rare: 'very rare',
        size: 'nine and a half meters'
      }
    }
  }).then( (instance, created) => {
    if (created) {console.log("We created it!")}
  })

}

export default defaultProducts
