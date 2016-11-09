import React from 'react'
import Product from './Product'

import S from '../../styles/S'

const baseStyles = {
  display: 'flex',
  width: '66%',
  alignItems: 'center',
  justifyItems: 'center',
  margin: 'auto'
}

const styles = new S(baseStyles)

function AllProducts () {
  return (
    <div
      style={{...styles.all}}
    >
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

export default AllProducts
