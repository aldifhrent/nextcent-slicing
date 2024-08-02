import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";

const Unlock = () => {
  return (
    <div className="flex justify-between mt-48px px-[144px] items-center">
      <Image src="/unlock.svg" width={442} height={433} alt="Unlock" />
      <div>
        <h1 className="font-semibold text-[36px]">
          The unseen of spending three years <br />
          at Pixelgrade
        </h1>
        <p className="text-[14px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="px-[32px] py-[14px] mt-8 bg-[#4CAF4F] rounded-[4px] text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Unlock;
