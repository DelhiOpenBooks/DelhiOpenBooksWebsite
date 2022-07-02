import React from 'react';

import { client } from '../../lib/Client';
import { Product, FooterBanner, Banner } from '../../components';

const Home = ({ products, bannerData }) => (
  <div>
    
    <div className="products-heading">
      <h2>All Books</h2>
      <p>Books from different authors</p>
    </div>

    <div className="products-container">
      
      {products?.map((product) => <Product key={product._id} product={product} />)}
      
    </div>

    
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product" && category=="horror"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;