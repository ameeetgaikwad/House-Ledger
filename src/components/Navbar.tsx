import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-red-50">
      {" "}
      <nav className=" p-4 min-w-screen">
        <div className="container mx-6 flex justify-between items-center">
          {/* Left side with image and name */}
          <div className="flex items-center space-x-4 ">
            <Image
              src="/vercel.svg" // Replace with the path to your image
              alt="Logo"
              className="w-16 h-16 "
              width={700}
              height={700}
            />

            <p className="font-semibold text-3xl text-gradient w-40 hidden md:block ">
              HOUSE LEDGER
            </p>
          </div>

          {/* Middle section with navigation links */}
          <div className=" hidden xl:block ">
            <div className="flex items-center space-x-12">
              <a href="#about" className=" hover:text-gray-200 text-xs">
                ABOUT
              </a>
              <a className=" hover:text-gray-200 text-xs">CREATE PROFILE</a>
            </div>
          </div>

          <ConnectButton
            label="Connect Wallet"
            accountStatus="full"
            showBalance={true}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
