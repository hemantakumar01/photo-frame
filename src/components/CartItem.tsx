"use client";
import { Trash } from "lucide-react";
import React from "react";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <div className="flex-1 border-y-2">
      <div className="flex items-start justify-between">
        <div className="img flex gap-2 p-2">
          <img
            src="https://storeassets.im-cdn.com/media-manager/framtastic/YXYZUpiRQNy5oMBCDwiQ_IMG_20210617_133537.jpg"
            alt=""
            className="h-[70px]"
            loading="lazy"
          />
          <div className="">
            <p className="text-ellipsis overflow-hidden text-nowrap  w-[100px] text-xs md:text-base">
              Lord Vishnu photo frame
            </p>
            <strong className="text-red-400 text-sm">₹500</strong>
          </div>
        </div>
        <div className="flex p-3 flex-col  justify-end gap-2">
          <div className="flex justify-end text-xs">
            <Trash className="text-xs " size={20} />
          </div>
          <div className="quantity flex items-center  ">
            <p className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] border ">
              -
            </p>
            <p className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] ">
              1
            </p>
            <p className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] border ">
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
