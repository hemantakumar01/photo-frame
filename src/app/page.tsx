"use client";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <HeroSection />
      <div className="py-3 mt-7">
        <h3 className="text-center py-9 text-gray-800 text-3xl font-semibold sm:text-4xl">
          Explore Our Frames
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="relative flex items-center justify-center ">
            <Link
              href={"/"}
              className="absolute text-xs md:text-base bottom-9 bg-[#ffffffc4] py-2 px-6 md:px-10 rounded-md font-bold  "
            >
              Lord Vishnu
            </Link>
            <img
              src="/home-page/lord-vishnu.jpg"
              loading="lazy"
              alt=""
              className=" h-[250px]  md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
          <div
            className="relative flex items-center justify-center "
            onClick={() => router.push("/frames")}
          >
            <Link
              href={"/frames"}
              className="absolute bottom-9 bg-[#ffffffa2] py-2 px-6 md:px-10 rounded-md font-bold text-xs md:text-base  "
            >
              Custum Uplode
            </Link>
            <img
              src="/home-page/uplode.jpg"
              loading="lazy"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
          <div className="relative flex items-center justify-center ">
            <Link
              href={"/"}
              className="absolute bottom-9 text-xs md:text-base bg-[#ffffffb7] py-2 px-6 md:px-10 rounded-md font-bold  "
            >
              Potrait
            </Link>
            <img
              loading="lazy"
              src="/home-page/custum-frame.jpg"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>

          <div className="relative flex items-center justify-center ">
            <Link
              href={"/"}
              className="absolute bottom-9 text-xs md:text-base bg-[#ffffffda] py-2 px-6 md:px-10 rounded-md font-bold  "
            >
              Lord Ganesg
            </Link>
            <img
              loading="lazy"
              src="/home-page/lord-ganesh.jpg"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
          <div className="relative flex items-center justify-center ">
            <Link
              href={"/"}
              className="absolute bottom-9 text-xs md:text-base bg-[#ffffffe7] py-2 px-6 md:px-10 rounded-md font-bold  "
            >
              Collage
            </Link>
            <img
              loading="lazy"
              src="/home-page/collage.jpg"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
          <div className="relative flex text-xs md:text-base items-center justify-center ">
            <Link
              href={"/"}
              className="absolute bottom-9 bg-[#ffffffc9] py-2 px-6 md:px-10 rounded-md font-bold  "
            >
              Lagends
            </Link>
            <img
              loading="lazy"
              src="/home-page/lagends.png"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
        </div>
      </div>

      <Stats />
      <div className="bg-[#82a6fc] py-8 relative">
        <Button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] py-0 ">
          Start Now
        </Button>
        <img loading="lazy" src="/home-page/HERO.jpg" alt="" />
      </div>
    </div>
  );
}
