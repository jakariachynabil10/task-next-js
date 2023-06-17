"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import Icici from "../../public/icons/Icici.png";
import Amex from "../../public/icons/Amex.png";
import Aufin from "../../public/icons/Aufin.png";
import Axis from "../../public/icons/Axis.png";
import BOB from "../../public/icons/BOB.png";
import YesBank from "../../public/icons/YesBank.png";
import Image from "next/image";

const TopBrand = () => {
  return (
    <>
      <h1 className="text-center font-bold text-xl">Top Brands on ZET</h1>
      <p className="text-center text-lg ">We are trusted by best brand in the country</p>
      <div className="my-10">
      <Marquee play={true} speed={70}>
        <div className="border rounded-xl flex items-center justify-center py-3 px-8 mx-5">
          <Image height={40} src={Icici}></Image>
        </div>
        <div className="border rounded-xl h-[70px] py-3 px-8 mx-5 flex items-center justify-center">
          <Image height={40} src={Amex}></Image>
        </div>
        <div className="border rounded-xl h-[70px] py-3 px-8 mx-5 flex items-center justify-center">
          <Image height={40} src={Aufin}></Image>
        </div>
        <div className="border rounded-xl h-[70px] py-3 px-8 mx-5 flex items-center justify-center">
          <Image height={40} src={Axis}></Image>
        </div>
        <div className="border rounded-xl h-[70px] py-3 px-8 mx-5 flex items-center justify-center">
          <Image height={40} src={BOB}></Image>
        </div>
        <div className="border rounded-xl h-[70px] py-3 px-8 mx-5 flex items-center justify-center">
          <Image height={40} src={YesBank}></Image>
        </div>
      </Marquee>
      </div>
    </>
  );
};

export default TopBrand;
