"use client";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";

import Link from "next/link";
export default function Home() {
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
              alt=""
              className=" h-[250px]  md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
          <div className="relative flex items-center justify-center ">
            <Link
              href={"/"}
              className="absolute bottom-9 bg-[#ffffffa2] py-2 px-6 md:px-10 rounded-md font-bold text-xs md:text-base  "
            >
              Custum Uplode
            </Link>
            <img
              src="/home-page/uplode.jpg"
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
              src="/home-page/lagends.png"
              alt=""
              className=" h-[250px] md:h-[400px] hover:opacity- cursor-pointer hover:scale-105 transition-all duration-75"
            />
          </div>
        </div>
      </div>

      <Stats />
      <main className="flex min-h-screen flex-col items-center  p-24">
        <Link href={"/frames"}>Images</Link>
        <Link
          href={
            "https://mahattaart.com/product-customization?product=wall_art&product_type=framing&print_type=archival_standard&print_surface=39&image_size=7X7&image_id=307719&frame_code=MA-EV-426-4-BLGD&mount1_code=&mount2_code=&mount3_code=&mount1_size=0.5&mount2_size=0.5&mount3_size=0.5&glass_type=GLS_001&is_table_frame=0&filter=undefined"
          }
          target="_blank"
        >
          Mahattaart
        </Link>
      </main>
    </div>
  );
}
