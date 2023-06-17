import Banner from '@/components/Banner';
import TopBrand from '@/components/TopBrand';
import React from 'react';

const Home = () => {
  return (
    <div className='lg:px-40'>
      <Banner></Banner>
     <div className='mt-36'>
     <TopBrand></TopBrand>
     </div>
    </div>
  );
};

export default Home;