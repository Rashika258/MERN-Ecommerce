import React from 'react'

const ProductCard = ({product}) => {

  const options = {
    value: product.ratings,
    readOnly: true,
    precision:0.5
  }


  return (
    <div>ProductCard</div>
  )
}

export default ProductCard