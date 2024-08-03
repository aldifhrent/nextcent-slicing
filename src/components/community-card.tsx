import React from "react";
import Image from "next/image";
interface CommunityCardProps {
  title: string;
  icon: string;
  description: string;
}
const CommunityCard = (props: CommunityCardProps) => {
  return (
    <div
      key={props.title}
      className="flex flex-col items-center w-[299px] h-[260px] py-[24px] px=[16px] text-center"
    >
      <Image src={props.icon} alt={props.title} width={65} height={56} />
      <h1 className="text-[26px] lg:text-[28px] text-center font-bold leading-[36px] mt-[16px]">
        {" "}
        {props.title}
      </h1>
      <p className="mt-[8px] text-[16px] lg:text-[18px]">{props.description}</p>
    </div>
  );
};

export default CommunityCard;
