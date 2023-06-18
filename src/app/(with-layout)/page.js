import Banner from '@/components/Banner';
import ProductOnZet from '@/components/ProductOnZet';
import TopBrand from '@/components/TopBrand';
import ZetEffectSection from '@/components/ZetEffectSection';
import React from 'react';

const Home = () => {
  return (
    <div >
     <div className='lg:px-40'>
      <Banner></Banner>
     </div>
     <div className='my-36'>
     <TopBrand></TopBrand>
     </div>
     <div className='bg-color  p-10'>
      <ProductOnZet></ProductOnZet>
     </div>
     <div className='my-20'>
     <ZetEffectSection></ZetEffectSection>
     </div>
    </div>
  );
};

export default Home;