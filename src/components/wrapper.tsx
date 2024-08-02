interface Wrapper {
  children: React.ReactNode;
  className?: React.ReactNode;
}

const Wrapper = ({ children, className }: Wrapper) => {
  return <div className={`px-[144px] ${className}`}>{children}</div>;
};

export default Wrapper;
