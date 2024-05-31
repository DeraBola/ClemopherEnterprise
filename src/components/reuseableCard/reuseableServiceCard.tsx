"use client";

import { fade } from "@/utils/framer-motion-variants";
import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ReuseableCardProps {
  text1: string;
  text2: string;
}

function ReusableCardServiceCard ({ text1, text2 }: ReuseableCardProps) {
  const scrollRef = useRef(null);

  return (
    <motion.div
      variants={fade}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      className="bg-white rounded-lg p-6 lg:p-11"
    >
      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4">
        <p className="lg:text-2xl text-xl font-bold text-black ">{text1}</p>
        <p className="lg:text-lg text-base lg:text-start text-center text-[#070403] !font-normal">{text2}</p>
        <Link href="communications@clemopherenterprise.com"  className="text-white lg:text-lg text-base bg-[#070403] bg-opacity-[95%] py-4 px-6 lg:px-16 rounded-lg hover:scale-110 transition-all">
          Contact me
        </Link>
      </div>
    </motion.div>
  );
}

export default ReusableCardServiceCard;