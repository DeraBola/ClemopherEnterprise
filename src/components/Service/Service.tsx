/* eslint-disable no-restricted-imports */
import React from "react";
import ReusableCard from "@/components/reuseableCard/reuseableCard";
import ReusableCardServiceCard from "@/components/reuseableCard/reuseableServiceCard";
import { Cater2, Cater3 } from "../../../public/assets";

function Service () {
  return (
    <section id="services" className="mt-14 gap-4">
      <div className="flex flex-col lg:gap-10 gap-5 px-[6.22vw] pb-14">
        <ReusableCard
          text1="Service package"
          text2="We offer a diverse range of catering solutions, from onshore and offshore catering services to executive dining and basic vendor solutions. Whether you’re planning an intimate gathering for 30, a corporate lunch for 150, or a grand wedding for 800 guests, our team is equipped to deliver delectable meals with impeccable presentation and flawless service."
          img={Cater2}
          switchCard={true}
        />
        <ReusableCard
          text1="Service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod."
          img={Cater3}
          switchCard={false}
          isList
        />
      </div>
      <div className="flex lg:flex-row flex-col px-[6.22vw] gap-6 lg:gap-12 py-6 lg:py-14 bg-[#080808] items-start justify-start">
        <ReusableCardServiceCard
          text1="Mission"
          text2="At Clemopher Enterprise, our mission is to deliver exceptional culinary experiences that celebrate both local and international flavors. We are committed to providing high-quality, innovative catering solutions with impeccable service, ensuring that every event we cater is memorable and exceeds our clients' expectations. Through our passion for food, dedication to excellence, and focus on customer satisfaction, we aim to create extraordinary dining experiences that bring people together."
        />
        <ReusableCardServiceCard
          text1="Vision"
          text2="Our vision is to be the premier catering service in Nigeria, recognized for our culinary excellence, diverse offerings, and outstanding service. We aspire to expand our reach, becoming a trusted name both locally and internationally. By continually innovating and upholding our core values of integrity, quality, and customer-centricity, we strive to set new standards in the catering industry, creating unforgettable moments and lasting impressions for our clients worldwide."
        />
      </div>
    </section>
  );
}

export default Service;
