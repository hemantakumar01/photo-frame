import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="w-full min-h-full flex items-center justify-center">
      <Skeleton className="w-[150px] h-[calc(1.414*150px)]">Hello</Skeleton>
    </div>
  );
};

export default Spinner;
