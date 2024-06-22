"use client";
import cartSlice, {
  addToCart,
  calculateTotal,
  removeCart,
} from "@/app/redux/features/cartSlice";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  _id: string;
  frameUrl?: string;
};

const CartItem = ({
  _id,
  imageUrl,
  name,
  price,
  quantity,
  frameUrl,
}: Props) => {
  const dispatch = useDispatch();
  const deleteCartItrm = (_id: string) => {
    dispatch(removeCart({ _id }));
    dispatch(calculateTotal());
    toast.error("Deleted Item");
  };
  const addItem = () => [
    dispatch(
      addToCart({
        _id,
        name,
        frameUrl,
        price,
        imageUrl,
        quantity: quantity + 1,
      })
    ),
  ];
  const removeItem = () => [
    dispatch(
      addToCart({
        _id,
        name,
        frameUrl,
        price,
        imageUrl,
        quantity: quantity === 1 ? 1 : quantity - 1,
      })
    ),
  ];
  useEffect(() => {
    dispatch(calculateTotal());
  }, [quantity]);
  return (
    <div className="flex-1 border-y-2">
      <div className="flex items-start justify-between">
        <div className="img flex gap-2 p-2">
          <img src={imageUrl} alt="" className="h-[70px]" loading="lazy" />
          <div className="">
            <p className="text-ellipsis overflow-hidden text-nowrap  w-[100px] text-xs md:text-base">
              {name}
            </p>
            <strong className="text-red-400 text-sm">₹{price}</strong>
          </div>
        </div>
        <div className="flex p-3 flex-col  justify-end gap-2">
          <div
            className="flex justify-end text-xs"
            onClick={() => deleteCartItrm(_id)}
          >
            <Trash className="text-xs " size={20} />
          </div>
          <div className="quantity flex items-center  ">
            <p
              className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] border "
              onClick={removeItem}
            >
              -
            </p>
            <p className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] ">
              {quantity}
            </p>
            <p
              className="flex items-center justify-center md:py-1 md:px-4 py-[2px] px-[6px] border "
              onClick={addItem}
            >
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
