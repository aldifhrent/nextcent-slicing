import Image from "next/image";
import Wrapper from "./wrapper";
import CommunityCard from "./community-card";

const CommunityDetails = [
  {
    image: "/community/community-1.svg",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "/community/community-2.svg",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "/community/community-3.svg",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];
const CommunityUpdates = () => {
  return (
    <Wrapper className="mt-12 mb-[96px] ">
      <div className="flex flex-col  items-center px-[165px] space-y-[16px]">
        <div className="">
          <h1 className="text-[36px] font-semibold leading-[44px] text-center text-[#4D4D4D]">
            Caring is the new marketing
          </h1>
          <p className="mt-[8px] text-center text-[16px] leading-6 text-[#717171]">
            The Nexcent blog is the best place to read about the latest
            membership insights,
            <br /> trends and more. See who&apos;s joining the community, read
            about how our community <br />
            are increasing their membership income and lot&apos;s more.​
          </p>
        </div>
        <div className="flex justify-between gap-x-6 py-6 ">
          {CommunityDetails.map((details) => (
            <CommunityCard
              image={details.image}
              title={details.title}
              key={details.title}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CommunityUpdates;
