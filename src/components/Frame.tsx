"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Card } from "./ui/card";

type Props = {
  src: string;
  frameUrl: string;
  borderImageSlice: string;
  id: string;
};

const Frame = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const route = useRouter();
  const handleCard = async (id: string) => {
    try {
      route.push(`/frames/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="p-2 cursor-pointer " onClick={() => handleCard(props.id)}>
      <div ref={ref} className=" w-fit flex items-center justify-center">
        <div
          style={{
            borderImageSource:
              `url('${props.frameUrl}')` || "url('/frame.jpg')",
            borderImageSlice: props.borderImageSlice || "73 70 70 66",
            borderImageWidth: "15px",
            borderImageRepeat: "stretch",
            padding: "15px",
          }}
          className="  w-[130px] h-[calc(1.414*130px)] md:w-[160px] md:h-[calc(1.414*160px)]"
        >
          <img
            src={props.src || "/frame5.jpg"}
            alt="Selected Image"
            className="h-full w-full object-fill"
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
