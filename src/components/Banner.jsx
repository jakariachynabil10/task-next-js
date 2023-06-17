'use client'

import Image from 'next/image';
import React from 'react';

import image2 from "../../public/image/image2.png"
import googlePlayStore from "../../public/icons/goolePlayStore.svg"

const Banner = () => {
    return (
      <>
        <div className=' relative flex  items-center  bg-[#007aff] bg-opacity-10 mt-20 p-9'>
            <div className=''>
            <h1 className='font-bold text-4xl text-black tracking-wide leading-tight mb-4 '>
          Become a Financial <br /> Advisor and{' '}
          <span className='text-blue-700'>Earn <br /> Rs.1 Lakh/Month</span>
        </h1>
        <p className='text-lg text-black'>No investment required</p>
        <Image src={googlePlayStore} className='pt-5'></Image>
            </div>
            <div className='absolute  right-10 bottom-5'>
                <Image src={image2} height={350}></Image>
            </div>
        </div>
      </>
    );
};

export default Banner;