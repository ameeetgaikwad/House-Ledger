import React from "react";
import Image from "next/image";
import Utils from "./utils";

const About = () => {
  return (
    <>
      <div className="">
        <p className=" flex justify-center mb-10 font-bold text-4xl ml-10">
          <span className="text-[#1252AE] ">About </span>
          Us
        </p>
        <div className=" flex flex-col-reverse md:flex-row">
          <div className=" mx-2 md:mx-10">
            <p className="text-3xl mb-10 ml-20">
              We are offering the best
              <br />{" "}
              <span className="text-[#1252AE] font-bold  ">
                Real Estate{" "}
              </span>{" "}
              Deals
            </p>
            <div className="flex justify-between mx-2 md:mx-20">
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-center items-center space-x-4">
                  <Utils />
                  <p>
                    A building with only one room and typically a steep pointy
                    roof.
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Utils />
                  <p>
                    A vehicle on wheels that has a permanent residence attached
                    to it.
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Utils />
                  <p>
                    Performing financial analysis and valuation of properties.
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Utils />
                  <p>
                    Someone who examines buildings and works with appraisers.
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <Utils />
                  <p>
                    A dwelling typically made of raw materials such as bamboo,
                    mud, and clay.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/House Halloween decorations-rafiki.svg"
              className="h-80 w-80 mr-3"
              alt="Flowbite Logo"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
