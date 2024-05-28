"use client";
import React, { useRef } from "react";
import { Card } from "./ui/card";
import { useRouter } from "next/navigation";
import { HTML_TO_IMAGE } from "@/app/utils/HTMLTOIMAGE";
import { useDispatch } from "react-redux";
import { setBaseUrl } from "@/app/redux/features/imgSlice";

import { AppDispatch } from "@/app/redux/store";

type Props = {
  src: string;
  borderStyle: string;
  borderWidth: string;
  borderColour: string;
};

const Frame = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLDivElement>(null);
  const route = useRouter();
  const handleCard = async () => {
    try {
      route.push("/frames/jdhfdh");
      const data = await HTML_TO_IMAGE(ref);
      console.log(data);
      dispatch(setBaseUrl(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="p-2 cursor-pointer" onClick={handleCard}>
      <div ref={ref} className=" w-fit">
        <div
          style={{
            borderStyle: props.borderStyle || "outset",
            borderWidth: props.borderWidth || `10px`,
            borderColor: props.borderColour || "black",
          }}
          className="   bg w-[150px] h-[calc(1.414*150px)] relative border-[15px] border-red-800 border-solid p-[3px] border-ridge  flex items-center justify-center "
        >
          <div className=" absolute   w-[197px] h-[calc(1.414*197px)]  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "></div>{" "}
          <img
            src={
              props.src ||
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Selected Image"
            className="h-full w-full"
          />
        </div>
      </div>
      <h2>Groved Frame</h2>
      <div className="flex items-center justify-between text-sm">
        <p className="font-semibold">₹300</p>
        <p>12X10</p>
      </div>
    </Card>
  );
};

export default Frame;
