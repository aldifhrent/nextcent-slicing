import Image from "next/image";
import Wrapper from "@/components/wrapper";

const Calendar = () => {
  return (
    <Wrapper className="mt-[48px] mb-[48px]">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-x-[49px] gap-y-[24px] md:gap-y-0">
        <Image src="/calendar.svg" width={441} height={433} alt="Calendar" />
        <div className="mt-8 lg:mt-0">
          <h1 className="text-[36px] text-[#4D4D4D] leading-[44px] font-semibold text-center lg:text-start">
            {" "}
            How to design your site footer like <br />
            we did
          </h1>
          <p className="text-[14px] text-[#717171] mt-4 leading-5 text-center lg:text-start">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="mt-8 px-8 py-[14px] rounded-[4px] bg-[#4CAF4F] text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calendar;
