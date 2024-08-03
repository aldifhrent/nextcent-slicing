import React from "react";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { CommunityData } from "@/const";
import CommunityCard from "./community-card";

const Community = () => {
  return (
    <Wrapper className="mt-[40px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#4D4D4D] text-[34px] lg:text-[36px] font-semibold text-center">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="mt-[8px] text-[16px] lg:text-[16px] text-[#717171]">
          Who is Nextcent suitable for?
        </p>
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-3 gap-x-[136px] mt-[16px]">
          {CommunityData.map((community) => (
            <CommunityCard
              key={community.title}
              title={community.title}
              icon={community.icon}
              description={community.description}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Community;
