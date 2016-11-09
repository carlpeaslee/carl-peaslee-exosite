
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLInteger
} from 'graphql';

import Product from '../models/Product'
import ProductType from '../types/ProductType'


const getAllProducts = {
  type: new GraphQLList(ProductType),
  resolve:  (source, args, context) => {
    console.log('getAllProducts')
    return new Promise( (resolve, reject) => {
      Product.findAll().then( (result, error) => {
        if (error) console.log(error)
        resolve(result)
      })
    })
  }
}


export default getAllProducts
