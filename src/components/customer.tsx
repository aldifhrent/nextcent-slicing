import React from "react";
import Wrapper from "./wrapper";
import { logo } from "./our-client";
import ClientLogo from "./client-logo";
import Image from "next/image";
const Customer = () => {
  return (
    <Wrapper className="bg-[#F5F7FA]">
      <div className="flex gap-x-[78px]  items-center ">
        <Image
          src="/customer.svg"
          width={326}
          height={326}
          alt="Customer"
          className="py-[32px]"
        />
        <div className="flex flex-col py-[33px]">
          <p className="text-[#717171] text-[16px] font-medium leading-6 w-full">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique qu am in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="mt-4 text-[20px] font-semibold text-[#4CAF4F]">
            Tim Smith
          </h1>
          <p className="mt-[8px] text-[16px] leading-[24px] ">
            British Dragon Boat Racing Association
          </p>
          <div className="flex space-x-[35px] mt-8 items-center w-full">
            {logo.map((icon) => (
              <ClientLogo image={icon.image} name={icon.name} key={icon.name} />
            ))}
            <h1 className="text-[20px] font-semibold leading-[28px] text-[#4CAF4F]">
              Meet All Customer -&gt;
            </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Customer;
