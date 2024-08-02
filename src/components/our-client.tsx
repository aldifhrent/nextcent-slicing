import React from "react";
import Wrapper from "./wrapper";
import ClientLogo from "./client-logo";

export const logo = [
  {
    image: "/clientlogo/1.svg",
    name: "1",
  },
  {
    image: "/clientlogo/2.svg",
    name: "2",
  },
  {
    image: "/clientlogo/3.svg",
    name: "3",
  },
  {
    image: "/clientlogo/4.svg",
    name: "4",
  },
  {
    image: "/clientlogo/5.svg",
    name: "5",
  },
  {
    image: "/clientlogo/6.svg",
    name: "6",
  },
  {
    image: "/clientlogo/7.svg",
    name: "7",
  },
];

const OurClient = () => {
  return (
    <div className="flex flex-col items-center mt-[40px]">
      <h1 className="text-[#4D4D4D] text-[36px] font-semibold">Our Clients</h1>
      <p className="mt-[8px] text-[16px] text-[#717171]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-[136px] mt-[16px]">
        {logo.map((client) => (
          <ClientLogo
            image={client.image}
            name={client.name}
            key={client.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClient;
