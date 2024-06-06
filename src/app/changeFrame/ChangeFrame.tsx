"use client";
import { ReactElement, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { frameData } from "../frameData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactElement;
};

const ChangeFrame = (props: Props) => {
  const [frames, setFrames] = useState<any>(null);
  const navigate = useRouter();
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
    <Drawer direction="left">
      <DrawerTrigger>{props.children}</DrawerTrigger>
      <DrawerContent className="top-0 mt-0 rounded-none w-[300px]">
        <ScrollArea className="h-full ">
          {frames ? (
            <div className="grid grid-cols-2 gap-2 p-2">
              {frames.map((e: any, index: any) => (
                <DrawerClose key={index}>
                  <Card
                    className="p-3 cursor-pointer "
                    key={index}
                    onClick={() => navigate.push(`/frames/${e._id}`)}
                  >
                    <img
                      className="p-2 bg-white w-[130px]"
                      src={e.frameUrl}
                      alt=""
                    />
                    <p className="  text-ellipsis overflow-hidden whitespace-nowrap text-sm font-medium ">
                      {e.name}
                    </p>
                  </Card>
                </DrawerClose>
              ))}
            </div>
          ) : (
            <div className="">hello..</div>
          )}
        </ScrollArea>

        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChangeFrame;
