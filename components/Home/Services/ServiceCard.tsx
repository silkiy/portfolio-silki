import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
  className?: string;
};

const ServiceCard = ({ icon, name, description, className }: Props) => {
  return (
    <div className={className}>
      <Image src={icon} alt="img" width={60} height={60} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-300">
        {name}
      </h1>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
