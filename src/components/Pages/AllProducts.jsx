import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductList from '../Products/ProductList';
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        async function getProducts(){
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
        }
        getProducts();
    }, []);
  return (
    <>
            <ProductList products={products} />
    </>
  )
}

export default AllProducts