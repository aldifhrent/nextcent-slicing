import { archiveCount } from "@/const";
import Count from "./count";
import Wrapper from "./wrapper";

const Achievement = () => {
  return (
    <Wrapper className="mt-[48px] bg-[#F5F7FA]">
      <div>
        <div className="flex flex-col gap-y-12 lg:gap-y-0 items-center justify-center lg:flex-row lg:justify-between pl-0 md:pl-[144px] space-y-12 md:space-y-0 py-[84px] ">
          <div>
            <h1 className="text-center lg:text-left text-[48px] lg:text-[36px] font-semibold leading-[44px]">
              Helping a local <br />{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="text-[16px] leading-[24px]  mt-1 text-center lg:text-left">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 pt-4 lg:grid-cols-2 gap-x-[30px] gap-y-[40px] ">
            {archiveCount.map((archive) => (
              <Count
                name={archive.name}
                count={archive.count}
                logo={archive.logo}
                key={archive.count}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Achievement;
