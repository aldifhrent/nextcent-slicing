import Image from "next/image";
import React from "react";

interface CommunityCard {
  image: string;
  title: string;
}
const CommunityUpdateCard = (props: CommunityCard) => {
  return (
    <div className="flex flex-col items-center text-center  rounded-[8px] shadow-b-xl">
      <Image
        src={props.image}
        alt={props.title}
        width={256.15}
        height={199.08}
        className="w-full"
      />
      <div className="mx-[25px] -mt-9 bg-[#F5F7FA] rounded-[8px] h-full max-h-[176px] p-4 w-[317px] shadow-xl">
        <h1 className="text-center text-[20px] leading-7 text-[#717171] font-semibold">
          {props.title}
        </h1>
        <p className="mt-4 text-[#4CAF4F] text-[20px] leading-7">
          Read More -&gt;
        </p>
      </div>
    </div>
  );
};

export default CommunityUpdateCard;
