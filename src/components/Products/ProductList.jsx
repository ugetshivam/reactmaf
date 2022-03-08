import React from 'react'
import Product from './Product'
import "./ProductList.css"
const ProductList = ({products}) => {
  return (
    <ul className='product-list'>
        {
            products.map((product)=>{
                return <Product
                    id={product._id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            })
        }
    </ul>
  )
}

export default ProductList