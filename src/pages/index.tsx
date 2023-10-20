import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyType from "@/components/PropertyType";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full mt-16 h-80  bg-[url('/images/hero-bg.png')] bg-[position:center_center]  bg-no-repeat">
        {" "}
        <Navbar />
        <Hero />
        <PropertyType />
        <About />
      </div>
    </>
  );
}
