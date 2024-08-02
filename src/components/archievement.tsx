import Count from "./count";
import Wrapper from "./wrapper";

const archiveCount = [
  {
    logo: "/count/member.svg",
    count: 2245341,
    name: "Members",
  },
  {
    logo: "/count/clubs.svg",
    count: 46328,
    name: "Clubs",
  },
  {
    logo: "/count/event.svg",
    count: 828867,
    name: "Event Bookings",
  },
  {
    logo: "/count/payment.svg",
    count: 2245341,
    name: "Payments",
  },
];
const Achievement = () => {
  return (
    <Wrapper className="mt-[48px] bg-[#F5F7FA]">
      <div>
        <div className="flex justify-between pl-[144px] py-[84px] items-center">
          <div>
            <h1 className="text-[36px] font-semibold leading-[44px]">
              Helping a local <br />{" "}
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>
            <p className="text-[16px] leading-[24px] ">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-[40px]">
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
