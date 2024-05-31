/* eslint-disable no-restricted-imports */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  appear,
  appear2,
  appear3,
  appear4,
} from "@/utils/framer-motion-variants";
import { Cake, Cocktail, Cocktail2, Food2, SmallChops } from "../../../public/assets";

function FollowMe () {
  const scrollRef = useRef(null);

  return (
    <section className="w-full lg:flex hidden pt-10 flex-col bg-[#080808] bg-opacity-[90%] items-center justify-center">
      <p className="text-white text-lg font-medium ">Email: communications@clemopherenterprise.com</p>
      <div className="flex gap-12 px-36 w-full mt-10 ">
        <motion.div
          variants={appear}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={SmallChops} alt="first lady" />
        </motion.div>
        <motion.div
          variants={appear2}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-32 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={Cocktail2} alt="second lady" />
        </motion.div>
        <motion.div
          variants={appear4}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-52 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={Cake} alt="third lady" />
        </motion.div>
        <motion.div
          variants={appear3}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-40 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={Food2} alt="first lady" />
        </motion.div>
        <motion.div
          variants={appear}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="hover:scale-110 transition-all cursor-pointer"
        >
          {" "}
          <Image src={Cocktail} alt="first lady" />
        </motion.div>
      </div>
    </section>
  );
}

export default FollowMe;
