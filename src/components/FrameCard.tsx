"use client";
import React from "react";
import { Card } from "./ui/card";

type Props = {
  // url:string,
  // slice:string,
  // width:string,
  // repeat:string
};

const FrameCard = (props: Props) => {
  return (
    <Card className="p-2 flex ">
      <div
        style={{
          borderImageSource: "url('/frame.jpg')",
          borderImageSlice: "73 70 70 66",
          borderImageWidth: "15px",
          borderImageRepeat: "stretch",
          padding: "15px",
        }}
        className="w-[150px] h-[calc(1.414*150px)] "
      >
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
    </Card>
  );
};

export default FrameCard;
