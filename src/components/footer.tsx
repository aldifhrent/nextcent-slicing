import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-[276px] py-[32px] bg-[#F5F7FA]">
        <h1 className="text-[#263238] text-[64px] leading-[76px] font-semibold text-center">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>
        <button className="px-8 py-4 bg-[#4CAF4F] text-white rounded-[2px] mt-8">
          Get a Demo -&gt;
        </button>
      </div>
      <div className="flex bg-[#263238] w-full max-h-[328px] px-[165px] py-[64px] space-x-[125px] justify-between">
        <div>
          <Image
            src="/footerlogo.svg"
            width={191}
            height={29}
            alt="Logo Footer"
          />
          <div className="mt-[40px] text-white">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p className="mt-[8px]">All rights reserved</p>
          </div>
          <div className="flex gap-x-4 mt-10">
            <Image
              src="/icon/instagram.svg"
              width={32}
              height={32}
              alt="Icon"
            />
            <Image src="/icon/kick.svg" width={32} height={32} alt="Icon" />
            <Image src="/icon/twitter.svg" width={32} height={32} alt="Icon" />
            <Image src="/icon/youtube.svg" width={32} height={32} alt="Icon" />
          </div>
        </div>
        <div className="flex gap-x-[30px]">
          <div>
            <h1 className="text-[20px] leading-[28px] text-white">Company</h1>
            <p className="mt-[24px] text-white text-[14px] leading-5">
              About us
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">Blog</p>
            <p className="mt-[12px] text-white text-[14px] leading-5">
              Contact us
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">
              Pricing
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">
              Testimonials
            </p>
          </div>
          <div>
            <h1 className="text-[20px] leading-[28px] text-white">Support</h1>
            <p className="mt-[24px] text-white text-[14px] leading-5">
              Help center
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">
              Terms of service
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">Legal</p>
            <p className="mt-[12px] text-white text-[14px] leading-5">
              Privacy policy
            </p>
            <p className="mt-[12px] text-white text-[14px] leading-5">Status</p>
            z
          </div>
          <div>
            <h1 className="text-[20px] leading-[28px] text-white">
              Stay up to date
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email address"
                className="text-[14px] leading-5 w-full bg-white/10 pl-[11px] pr-[40px] py-[9px] mt-[33px] rounded-[8px]"
              />
              <Image
                src="/icon/send.svg"
                alt="Send Icon"
                width={18}
                height={18}
                className="absolute top-1/2 right-[11px]  -translate-y-1/2 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
