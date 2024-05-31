/* eslint-disable no-restricted-imports */
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import {
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  hiddenMask,
  visibleMask,
} from "@/utils/framer-motion-variants";
import { motion } from "framer-motion";
import { Call, Message } from "iconsax-react";
import { Cater1 } from "../../../public/assets";

export default function Banner () {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scrollRef = useRef(null);

  return (
    <section
      className="lg:mt-[6rem] mt-[5.9rem] flex items-center justify-center bg-[#080808] rounded-bl-lg w-full"
      id="home"
    >
      <div className="lg:px-[8vw] px-3 py-10 w-full lg:w-full flex justify-between lg:flex-row flex-col items-center  ">
        <motion.div
          initial={false}
          animate={
            isLoaded
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="w-[50%] h-[25rem]"
        >
          <Image
            src={Cater1}
            className="w-full h-full object-cover rounded-md"
            alt="banner"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
        <div className="flex lg:ml-[2%] flex-col lg:mt-0 mt-6 items-center lg:justify-center justify-start gap-5 text-center w-full lg:w-[50rem]">
          <motion.p
            variants={fadeUp1}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-bold text-2xl lg:text-4xl"
          >
            What We Do
          </motion.p>
          <motion.p
            variants={fadeUp2}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-semibold text-base lg:text-lg"
          >
           With years of experience in the catering industry, our skilled chefs and professional staff are dedicated to delivering an exceptional culinary experience. We use only the freshest ingredients, ensuring that each dish bursts with flavor and quality. Our team stays at the forefront of the industry by employing the latest culinary techniques, crafting innovative and delectable menus. Whether you&rsquo;re looking for traditional favorites or contemporary creations, we tailor our offerings to reflect your unique taste and style. Our commitment to excellence shines through in every detail, from the first bite to the final presentation. We pride ourselves on providing not just a meal, but an unforgettable dining experience. Let us bring our passion for food and dedication to service to your next event, making it truly special.
          </motion.p>
          <motion.button
            variants={fadeUp3}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#080808]  bg-white  py-4 px-16 rounded-lg hover:bg-white   hover:!scale-110 transition-all"
          >
            Let’s Chat
          </motion.button>
          <motion.div
            variants={fadeUp4}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex items-center cursor-pointer bg-white px-3 py-2.5 rounded-md justify-center gap-5"
          >
            <a href="tel:0911002222" className=""><Call color="#00000099" size={25} variant="Bold" /></a>
            <a href="communications@clemopherenterprise.com" className=""><Message color="#00000099" size={25} variant="Bold" /></a>
            <Icons.instagram />
            <Icons.twitter />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
