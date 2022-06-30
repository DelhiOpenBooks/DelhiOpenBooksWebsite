import React from 'react'
import { Router, useRouter } from 'next/router'
import {client,urlFor } from '../../lib/Client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {Product} from '../../components';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link';


const Category = () => {
    const router=useRouter();
    console.log({router})
  return (
    <div className='product-container'> Category</div>
  )
}


export default Category