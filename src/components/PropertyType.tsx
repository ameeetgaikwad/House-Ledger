import React from "react";
import Image from "next/image";

const PropertyType = () => {
  return (
    <>
      <div className="">
        <p className=" flex justify-center mb-10 font-bold text-4xl ml-10">
          <span className="text-[#1252AE]">Property</span>
          Types
        </p>
        <div className="flex  flex-col justify-center items-center md:space-x-10 md:flex-row md:justify-center md:items-center p-5 m-5">
          <Image
            src="/icons/Apartment.png"
            className="h-36 w-20 mr-3"
            alt="Flowbite Logo"
            width={180}
            height={150}
          />
          <Image
            src="/icons/Exclusive Hotel.png"
            className="h-36 w-28 mr-3"
            alt="Flowbite Logo"
            width={180}
            height={150}
          />
          <Image
            src="/icons/Private House.png"
            className="h-36 w-28 mr-3"
            alt="Flowbite Logo"
            width={180}
            height={150}
          />
          <Image
            src="/icons/Private Room.png"
            className="h-36 w-28 mr-3"
            alt="Flowbite Logo"
            width={180}
            height={150}
          />
          <Image
            src="/icons/Warehouse (1).png"
            className="h-36 w-20 mr-3"
            alt="Flowbite Logo"
            width={180}
            height={150}
          />
        </div>
      </div>
    </>
  );
};

export default PropertyType;
