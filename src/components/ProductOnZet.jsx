"use client";

import React from "react";
import accountSave from "../../public/icons/AccountSave.png";
import BNPL from "../../public/icons/BNPL.png";
import Loan from "../../public/icons/Loan.png";
import cc from "../../public/icons/CC.png";
import Image from "next/image";

const ProductOnZet = () => {
  return (
    <>
      <h1 className="text-center font-bold text-xl">Products on ZET</h1>
      <p className="text-center text-lg font-medium">
        We are trusted by best brand in the country
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center  px-10 mt-10">
  <div className="lg:flex items-center hover:scale-105 transition-transform duration-300 w-full lg:w-[489px] lg:md:h-[181px] my-5 shadow-xl">
    <figure>
      {/* <img src={cc} alt="CREDIT CARDS" /> */}
      <Image alt="CREDIT CARDS" src={cc}></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">CREDIT CARDS</h2>
      <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
    </div>
  </div>

  <div className="lg:flex items-center hover:scale-105 transition-transform duration-300 w-full lg:w-[489px] lg:md:h-[181px] shadow-xl">
    <figure>
      {/* <img src={Loan} alt="Loan" /> */}
      <Image alt="LOANS" src={Loan}></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">LOANS</h2>
      <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
    </div>
  </div>

  <div className="lg:flex items-center hover:scale-105 transition-transform duration-300 w-full lg:w-[489px] lg:md:h-[181px] shadow-xl">
    <figure>
      {/* <img src={BNPL} alt="BUY NOW PAY LATER" /> */}
      <Image src={BNPL} alt="BUY NOW PAY LATER"></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">BUY NOW PAY LATER</h2>
      <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
    </div>
  </div>

  <div className=" lg:flex items-center hover:scale-105 transition-transform duration-300 w-full lg:w-[489px] lg:md:h-[181px] shadow-xl">
    <figure>
      {/* <img src={accountSave} alt="SAVING ACCOUNTS" /> */}
      <Image src={accountSave} alt="SAVING ACCOUNTS"></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">SAVING ACCOUNTS</h2>
      <p>ZET offers a range of savings account that suits your personal needs for banking.</p>
    </div>
  </div>
</div>

    </>
  );
};

export default ProductOnZet;
