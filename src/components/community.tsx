import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";

const CommunityData = [
  {
    icon: "/community/member.svg",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/community/assosiation.svg",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/community/club.svg",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const Community = () => {
  return (
    <Wrapper className="mt-[40px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[#4D4D4D] text-[36px] font-semibold text-center">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="mt-[8px] text-[16px] text-[#717171]">
          Who is Nextcent suitable for?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[136px] mt-[16px]">
          {CommunityData.map((community) => (
            <div
              key={community.title}
              className="flex flex-col items-center w-[299px] h-[260px] py-[24px] px=[16px] text-center"
            >
              <Image
                src={community.icon}
                alt={community.title}
                width={65}
                height={56}
              />
              <h1 className="text-[28px] text-center font-bold leading-[36px] mt-[16px]">
                {" "}
                {community.title}
              </h1>
              <p className="mt-[8px]">{community.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Community;
