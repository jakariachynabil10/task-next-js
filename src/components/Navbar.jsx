'use client'

import Link from "next/link";
import React from "react";

import logo from "../../public/logo/zet.svg"
import Image from "next/image";

const Navbar = () => {

  const navLinks = [
    {
      path : '/',
      title : 'Home'
    },
    {
      path : '/about',
      title : 'About Us'
    },
    {
      path : '/partnerWithUs',
      title : 'Partner With US'
    },
    {
      path : '/blog',
      title : 'Blog'
    },
  ]



  return (
    <>
      <div className="navbar p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
               {
            navLinks.map(({path, title}) => <li key={path}>
             <Link href={path}>{title}</Link>
            </li>)
           }
             
            </ul>
          </div>
          <Link href='/'>
          <Image alt="" src={logo} width={100} ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            navLinks.map(({path, title}) => <li key={path}>
             <Link href={path}>{title}</Link>
            </li>)
           }
          </ul>
        </div>
        <div className="">
          <a className="btn btn-primary">Download ZET</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
