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
      description: 'One of the best Widgets in the industry right now.',
      features: {
        Size: 'Medium'
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
      description: 'Your friends and family will all be jealous of this Doodad.',
      features: {
        'Fun-Level': '10',
        Smell: 'Strawberry'
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
      description: 'Everyone needs a Whirlygig. Everyone.',
      features: {
        Toxic: 'sometimes',
        Condition: 'Mint',
        Vintage: '2012'
      }
    }
  }).then( (instance, created) => {
    if (created) {console.log("We created it!")}
  })

}

export default defaultProducts
