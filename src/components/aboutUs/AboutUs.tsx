/* eslint-disable no-restricted-imports */
import React from "react";
import Image from "next/image";
import { Cater4, Cater5, SmallChops } from "../../../public/assets";

function AboutUs () {
  return (
    <section id="about" className="mt-14 px-[6.22vw] text-center mb-36 lg:mb-16 flex flex-col item-center justify-center gap-3 lg:gap-10">
      <p className=" lg:text-4xl text-xl font-bold text-[#070403]">ABOUT US</p>
      <div className="flex lg:flex-row flex-col gap-6 items-start justify-start ">
        <div className="bg-[#080808] p-7 lg:w-1/2 bg-opacity-[70%] w-full">
          <Image src={Cater4} alt="" />
        </div>
        <div className="flex flex-col text-[#070403] gap-4 w-full lg:w-1/2 items-start justify-start">
          <p className="lg:text-lg text-base font-normal">
          Since 2002, Clemopher Enterprise. has been dedicated to making your events unforgettable. Based in Lagos, we specialize in off-site catering, providing exceptional services throughout Nigeria. Our commitment to excellence and passion for creating memorable experiences are the driving forces behind our success.
           Our story is built on hard work, passion, and a deep-seated belief in the power of divine intervention. At Clemopher Enterprise, we place God at the center of everything we do, ensuring that our values of integrity, dedication, and quality shine through in every event we cater.</p>
          <div className="flex flex-col">
            <p className="lg:text-xl text-base font-bold mb-4">Why Choose Us? </p>
            <p className="lg:text-lg text-base font-normal">
            Choose  Clemopher Enterprise. for an unparalleled culinary experience, where quality and creativity meet. Our expert chefs use only the freshest ingredients to craft menus tailored to your unique tastes. With a commitment to exceptional service and meticulous attention to detail, we ensure every event is memorable. Our extensive experience in both local and international catering guarantees a diverse and delightful dining experience. Trust us to make your special occasions truly extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
