import React from "react";
import Image from "next/image";

interface ClientLogoProps {
  image: string;
  name: string;
}
const ClientLogo = ({ name, image }: ClientLogoProps) => {
  return <Image src={image} alt={name} width={48} height={48} />;
};

export default ClientLogo;
