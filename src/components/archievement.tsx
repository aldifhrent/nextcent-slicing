import { archiveCount } from "@/const";
import Count from "./count";
import Wrapper from "./wrapper";

const Achievement = () => {
  return (
    <Wrapper className="mt-[48px] bg-[#F5F7FA]">
      <div>
        <div className="flex flex-col md:flex-row justify-between pl-0 md:pl-[144px] space-y-12 md:space-y-0 py-[84px] items-center">
          <div>
            <h1 className="text-[36px] font-semibold leading-[44px]">
              Helping a local <br />{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="text-[16px] leading-[24px] ">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[40px]">
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
