import React from 'react'
import { Router, useRouter } from 'next/router'
import {client,urlFor } from '../../lib/Client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {Product, ProductCategories} from '../../Components';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';
import { useState } from 'react';


const Category = (product,products) => {
    const { image, name,originalprice ,category} = product;
    const [index,setIndex]=useState(0);
    const { decQty, incQty, qty,onAdd} = useStateContext();

    const router=useRouter();
    console.log({router})
  return (
    <div className='product-container'> Category
     
   
    </div>
    
  )
}

// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//         category
//       }`
//     const products = await client.fetch(query)
//     const paths = products.map((product) => ({
//       params: { category: product.category }
//     }))
  
//     return {
//       paths,
//       fallback: 'blocking'
//     }
//   }

//   export const getStaticProps = async ({ params: { category} }) => {
//     const query = `*[_type == "product" && slug.current == 'horror']`
//     const product = await client.fetch(query)
  
//     const productsQuery = `*[_type == "product"]`
//     const products = await client.fetch(productsQuery)
  
//     return {
//       props: { products, product }
//     }
//   }


export default Category