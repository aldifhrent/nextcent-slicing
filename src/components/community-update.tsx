import Wrapper from "./wrapper";
import { CommunityDetails } from "@/const";
import CommunityCard from "@/components/community-update-card";
import CommunityUpdateCard from "@/components/community-update-card";

const CommunityUpdates = () => {
  return (
    <Wrapper className="mt-12 mb-[96px] ">
      <div className="flex flex-col items-center px-[165px] gap-x-[16px]">
        <div className="">
          <h1 className="text-[32px] lg:text-[36px] font-semibold leading-[44px] text-center text-[#4D4D4D]">
            Caring is the new marketing
          </h1>
          <p className="mt-[8px] text-center text-[14px] lg:text-[16px] leading-6 text-[#717171] text-nowrap">
            The Nexcent blog is the best place to read about the latest
            membership insights,
            <br /> trends and more. See who&apos;s joining the community, read
            about how our community <br />
            are increasing their membership income and lot&apos;s more.​
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between gap-x-6 py-6 gap-y-6 lg:gap-y-0 ">
          {CommunityDetails.map((details) => (
            <CommunityUpdateCard
              key={details.title}
              image={details.image}
              title={details.title}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CommunityUpdates;
