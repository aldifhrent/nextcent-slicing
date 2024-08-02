import React from "react";
import { logo } from "@/const";
import ClientLogo from "@/components/client-logo";

const OurClient = () => {
  return (
    <div className="flex flex-col items-center mt-[40px]">
      <h1 className="text-[#4D4D4D] text-[24px] lg:text-[36px] font-semibold">
        Our Clients
      </h1>
      <p className="mt-[8px] text-[12px] lg:text-[16px] text-[#717171]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-x-[136px] mt-[16px]">
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
