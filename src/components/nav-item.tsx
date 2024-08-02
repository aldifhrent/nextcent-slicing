const NavMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Feature",
    href: "#feature",
  },
  {
    name: "Product",
    href: "#product",
  },
  {
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];
const NavItem = () => {
  return (
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
  );
};

export default NavItem;
