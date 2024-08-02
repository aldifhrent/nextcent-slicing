import Image from "next/image";
import NavItem from "@/components/nav-item";

const Header = () => {
  return (
    <header className="py-[30px] px-[105px]">
      <div className="flex justify-between items-center">
        <Image src="/Logo.svg" width={154} height={24} alt="Logo" />
        <NavItem />
      </div>
    </header>
  );
};

export default Header;
