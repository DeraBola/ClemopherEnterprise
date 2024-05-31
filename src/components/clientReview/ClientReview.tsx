/* eslint-disable no-restricted-imports */
"use client";

import React, { useRef, useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import { fadeUp1, fadeUp2 } from "@/utils/framer-motion-variants";
import { motion } from "framer-motion";
import { Banner, BrandingImg, IndianFood } from "../../../public/assets";

const reviews = [
  {
    title: "Perfect Wedding Reception",
    content:
      "The food was exquisite, and the presentation was stunning. Our guests are still talking about how delicious everything was. Their attention to detail and seamless service made our day unforgettable. Highly recommended!",
    name: "John Adeyemi"
  },
  {
    title: "Exceeded Corporate Lunch Expectations",
    content:
      "The menu was diverse, catering to various dietary needs, and every dish was prepared to perfection. Their professionalism and prompt service were impressive. We will definitely be using their services again!",
    name: "Nkechi Okafor"
  },
  {
    title: "Memorable Birthday Party Experience",
    content:
      "The flavors were incredible, and the presentation was top-notch. They truly know how to create a memorable dining experience. I'll be booking them for my own events from now on!",
    name: "Chukwudi Mba"
  },
  {
    title: "Huge Hit at Family Reunion",
    content:
      "The variety of local and international dishes was fantastic, and everything was cooked to perfection. The staff was friendly and professional, making sure every detail was taken care of. Thank you for making our event so special!",
    name: "Promise Ike"
  },
];

function ClientReview () {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  return (
    <section  className="lg:h-auto h-[25rem] lg:mb-0 mb-10 relative w-full">
      <div className="hidden w-full h-[500px] lg:block ">
        <Image src={Banner} alt="flower background" className="bg-cover h-full w-full" />
      </div>
      <div className="lg:px-[6.22vw] flex items-center justify-center flex-col w-full lbg-white  backdrop-filter lg:rounded-none rounded-lg lg:border-none border border-[#372b25] backdrop-blur-sm bg-opacity-10 animate-fade absolute top-1/2 -translate-y-1/2">
        <p className="text-[#070403] font-bold text-base mb-4 mt-6 lg:text-3xl">What Our Customers Are Saying</p>
        {reviews.map((review, index) => (
          <div
            className={`${
              currentSlide === index ? "block" : "hidden"
            } flex px-6 flex-col items-center gap-3 lg:gap-8 justify-center`}
            id="reviews"
            key={index}
          >
            <div
              className="ml-auto rounded-full p-2 mb-2 lg:mb-4 border bg-white border-[#412626] cursor-pointer"
              onClick={nextSlide}
            >
              <Icons.arrowRight />
            </div>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="animate-fade text-[#080808] font-bold text-base lg:text-xl"
            >
              {review.title}
            </motion.p>
            <motion.p
              variants={fadeUp2}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="animate-fade text-sm w-full  lg:max-w-[800px] lg:text-base text-[#080808] font-medium"
            >
              {review.content}
            </motion.p>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="animate-fade text-[#080808] font-bold text-sm lg:text-base"
            >
              {review.name}
            </motion.p>
            <div
              className="mr-auto mt-6 mb-5 lg:mb-9 rounded-full p-2 border bg-white border-[#412626] cursor-pointer"
              onClick={goToPrevSlide}
            >
              <Icons.arrowLeft />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientReview;
