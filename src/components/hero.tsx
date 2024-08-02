import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative px-[144px] py-[96px]">
      <div className="flex flex-col md:flex-row relative justify-between items-center">
        <div className="">
          <h1 className="text-[54px] sm:text-[64px] font-bold lg:font-semibold">
            Lessons and insights
            <br />
            <span className="text-[#4CAF4F] text-[54px] sm:text-[64px] font-semibold">
              from 8 years
            </span>
          </h1>
          <p className="text-[16px] mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="px-[20px] py-[10px] mt-[32px] bg-[#4CAF4F] rounded-[6px] text-white">
            Sign up
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <Image src="/hero.svg" width={391} height={407} alt="Hero Image" />
        </div>
      </div>
      <div className="absolute bottom-8 inset-x-1 flex justify-center">
        <Image
          src="/dot-carousel.svg"
          width={46}
          height={10}
          alt="Dot Carousel"
        />
      </div>
    </div>
  );
};

export default Hero;
