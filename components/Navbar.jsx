import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from '.';
import { useStateContext} from '../context/StateContext';
import productCatagories from '.';
import Product from '.';


const Navbar = (product) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

 

  return (
    <div className="navbar-container">
      <span className='logo'>
        <Link href="/">Delhi Open Books</Link>  
      </span>
        <span className='dropdown-categores' ><Link href='/newArrival'>New Arrivals</Link></span>
        <span className='dropdown-categores' ><Link href='/books'>Book Categories</Link></span>

      
      
      
      <button type='button' className='cart-icon' onClick={()=>{
        setShowCart(true);
      }}>
         <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
     {showCart &&
      <Cart/>}
      
    </div>
  )
}

export default Navbar