import React from 'react';

import Link from 'next/link';
// import { urlFor } from '../lib/client'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';
import {TiSocialLinkedin,TiSocialFacebook} from 'react-icons/ti';

import logo from '../public/logo.png'

const FooterBanner = ({footerBanner:{
discount,largeText1,largeText2,saleTime,smallText,midText,product,buttonText,image,desc}}) => {
return (

<div className='footer-banner-container'>
  <div className="banner-desc">


  <div className="ftr-row">
    <div className="ftr-col">
    <img src='/logo.png' className='ftr-logo'/>
      <p>We are a book publisher and distributor based at Daryaganj in New Delhi. We have a catalog of 1000+ books. We distribute all kinds of original general books.</p>
    </div>
    <div className="ftr-col">
      <h3>Location <div className="underline"><span></span></div></h3>
      <p>Ground Floor, 4771, 23,</p>
      <p>Bharat Ram Rd, Daryaganj,</p>
      <p>New Delhi, Delhi 110002</p>
      <p className='ftr-email'>DelhiopenBooks2016@gmail.com</p>
      <h4>+91 9952991100</h4>
    </div>
    <div className="ftr-col">
      <h3>Links<div className="underline"><span></span></div> </h3>
      <ul>
        
        <li><Link href="https://www.google.com">Home</Link></li>
        <li><Link href="">Careers</Link></li>
        <li><Link href="">Contact</Link></li>
        <li><Link href="">Services</Link></li>
      </ul>
    </div>
    <div className="ftr-col">
      <h3>Newsletter<div className="underline"><span></span></div></h3>
      <form>
      <p className='envelope'>&#x2709;</p>
        <input type="email" placeholder='Enter your Email ID' required/>
        <button type='submit'><span className='but' >&#8658;</span></button>
       
      </form>
      <div className="social-icons">
          <span className='icon-design'><AiFillInstagram/></span>
          <span className='icon-design'><AiOutlineTwitter/></span>
          <span className='icon-design'><TiSocialLinkedin/></span>
          <span className='icon-design'><TiSocialFacebook/></span>
            
        </div>
    </div>
    

  </div>
  
  </div>
  <hr/>
  <p className='domain'>For Bulk orders Contact Us and get Special Discount</p>

</div>
)
}

export default FooterBanner