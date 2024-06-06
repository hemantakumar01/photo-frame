"use client";
import Frame from "@/components/Frame";
import axios from "axios";
import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import EditImage from "../editImage/EditImage";
import { useAppSelector } from "../redux/store";
import Spinner from "@/components/Spinner";
import { Skeleton } from "@/components/ui/skeleton";
type Props = {};

const Page = (props: Props) => {
  const localUrl = useAppSelector((state) => state.ImageReducer.localURL);
  const [frames, setFrames] = useState(null);

  const getAllFrames = async () => {
    try {
      const { data } = await axios.get("/api/newFrame");
      if (data.success) {
        setFrames(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllFrames();
  }, []);
  return (
    <section className="py-8">
      <EditImage>
        <span className="px-10 text-sm cursor-pointer  text-white bg-primary py-3 rounded-sm  ml-5 flex items-center justify-center gap-2">
          <Upload />
          Uplode Your Image
        </span>
      </EditImage>

      {frames ? (
        <div className=" grid grid-cols-2  gap-2   sm:flex items-center md:gap-3 sm:flex-wrap justify-center p-1 mt-4">
          {(frames as []).map((e: any, index) => (
            <Frame
              src={localUrl}
              key={index}
              frameUrl={e.frameUrl}
              borderImageSlice={e.borderCSS.imageSlice}
              id={e._id}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-7 mt-3">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[220px]" />
            <div className="flex items-center justify-between ">
              <Skeleton className="w-[80px] h-[20px]" />
              <Skeleton className="w-[40px] h-[20px] " />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
