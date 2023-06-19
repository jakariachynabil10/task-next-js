"use client";

import peeps1 from "../../public/image/peeps1.png";
import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

const ZetEffectSection = () => {
  return (
    <div className="custom-border">
      <div className="border-style flex justify-center items-center mx-auto w-[700px] h-[470px] py-[70px] px-1">
        <div>
          <Image
            src={peeps1}
            className="bg-transparent mix-blend-luminosity bg-origin-content"
            alt="people"
          ></Image>
        </div>
        <div className="w-1/2">
          <h1 className="text-white font-medium text-lg py-4">THE ZET EFFECT</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
           scrollbar ={true}
            modules={[Autoplay,   Scrollbar]}
            className="mySwiper text-white font-extrabold text-3xl"
          >
            <SwiperSlide>
              14 Lakh+ Financial Advisor across India are using ZET to increase
              their income.
            </SwiperSlide>
            <SwiperSlide>
              We helped customers in more than 50 cities to get their first
              financial product
            </SwiperSlide>
            <SwiperSlide>
              More than ₹20 Cr earned by our Agents by selling Credit Cards and
              Loans
            </SwiperSlide>
          </Swiper>
        
        </div>
      </div>
    </div>
  );
};

export default ZetEffectSection;
