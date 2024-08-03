"use client";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const NavMenu = [
    { name: "Home", href: "/", active: pathname === `/` },
    { name: "Services", href: "/services", active: pathname === `/services` },
    { name: "Feature", href: "/feature", active: pathname === `/feature` },
    { name: "Product", href: "/product", active: pathname === `/product` },
    {
      name: "Testimonial",
      href: "/testimonial",
      active: pathname === `/testimonial`,
    },
    { name: "FAQ", href: "/faq", active: pathname === `/faq` },
  ];

  return (
    <header className="py-[30px] px-[105px] md:py-[50px]">
      <div className="flex justify-between items-center relative">
        <Image src="/Logo.svg" width={154} height={24} alt="Logo" />
        <nav className="hidden lg:flex space-x-[50px] items-center">
          {NavMenu.map((nav) => (
            <p key={nav.href}>{nav.name}</p>
          ))}
          <div className="flex space-x-[14px]">
            <button className="px-[20px] py-[10px] bg-[#F5F7FA] rounded-[6px] text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-white">
              Login
            </button>
            <button className="px-[20px] py-[10px] bg-[#4CAF4F] rounded-[6px] text-white">
              Sign up
            </button>
          </div>
        </nav>
        <button
          className="right-[105px] z-50 lg:hidden"
          onClick={handleOpen}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <XMarkIcon
              width={24}
              height={24}
              className={`absolute transition-all duration-300 ease-in-out ${
                open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
            />
            <Bars3Icon
              width={24}
              height={24}
              className={`absolute transition-all duration-300 ease-in-out ${
                open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
              }`}
            />
          </div>
        </button>
        <nav
          className={`${
            open ? "block" : "hidden"
          } fixed inset-0  max-h-[30px] z-40 lg:hidden mt-20`}
        >
          <ul className="p-4 bg-white">
            {NavMenu.map((nav) => (
              <li key={nav.href} className="mb-2">
                <Link
                  href={nav.href}
                  className={cn(
                    "block py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-400 rounded",
                    nav.active ? "text-black" : "text-muted-foreground"
                  )}
                  onClick={handleOpen}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
