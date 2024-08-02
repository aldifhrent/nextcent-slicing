import Image from "next/image";

interface CountProps {
  name: string;
  count: number;
  logo: string;
}
const Count = (props: CountProps) => {
  return (
    <div className="flex gap-x-[6px] w-[255px] h-[60px] items-center">
      <Image
        src={props.logo}
        alt={props.name}
        width={48}
        height={48}
        className="mx-[6px]"
      />
      <div>
        <p className="font-bold text-[28px]">
          {props.count.toLocaleString("en-US")}
        </p>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Count;
