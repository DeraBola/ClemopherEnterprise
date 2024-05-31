/* eslint-disable no-restricted-imports */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import { CompanyLogo } from "../../../public/assets";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = () => {
    setTimeout(() => {
      setOpenMenu(false);
    }, 300);
  };

  return (
    <nav className="top-0 px-[6.22vw] z-[99999990] flex bg-white justify-between items-center bg-opacity-[42%] fixed py-4 w-full">
      <Link href="#home" className="w-full">
        <div className="lg:w-[30%] w-[200px] lg:h-12 h-8">
          <Image className="w-full h-full object-cover" src={CompanyLogo} alt="" />
        </div>
      </Link>
      <ol className="cursor-pointer hidden lg:flex py-4">
        <div className="flex gap-6 text-[#080808] text-base font-bold items-center justify-start">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li  id="">
            <Link href="#about" > About</Link>
          </li>
          <li id="" >
            <Link href="#services" >Services</Link>
          </li>
          <li>
            <Link href="#reviews">
                Review
            </Link>
          </li>
        </div>
      </ol>
      <div className="lg:hidden transition-all  z-30 block items-center justify-center text-center" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ?  <Icons.closeMenu /> :  <Icons.hamburgerMenu />}
      </div>
      <div className={`${openMenu ? "translate-x-0 " : "translate-x-[-100%]"} w-full h-full flex flex-col items-start justify-start lg:hidden z-20 fixed transition-transform top-0 left-0  pt-24 bg-white`}>
        <ol className="flex w-full  flex-col gap-8 cursor-pointer text-center items-center  justify-center text-[09092930497
] ">
          <li className="text-md font-semibold font-sans" onClick={handleClose}>
            <Link href="#home">Home</Link>
          </li>
          <li className="text-md font-semibold font-sans" onClick={handleClose} >
            <Link href="#about" > About</Link>
          </li>
          <li className="text-md font-semibold font-sans" onClick={handleClose}>
            <Link href="#services" >Services</Link>
          </li>
          <li className="text-md font-semibold font-sans" onClick={handleClose}>
            <Link href="#reviews">
                Review
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
