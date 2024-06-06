import { ReactElement } from "react";

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

type Props = {
  children: ReactElement;
};

const ChangeFrame = (props: Props) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>{props.children}</DrawerTrigger>
      <DrawerContent className="top-0 mt-0 rounded-none w-[300px]">
        <ScrollArea className="h-full ">
          <div className="grid grid-cols-2 gap-2 p-2">
            {frameData.map((e, index) => (
              <Card className="p-3 cursor-pointer " key={index}>
                <img
                  className="p-2 bg-white w-[130px]"
                  src={e.frameUrl}
                  alt=""
                />
                <p className="  text-ellipsis overflow-hidden whitespace-nowrap text-sm font-medium ">
                  {e.name}
                </p>
              </Card>
            ))}
          </div>
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
