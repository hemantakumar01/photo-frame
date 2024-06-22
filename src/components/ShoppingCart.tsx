"use client";
import { useAppSelector } from "@/app/redux/store";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactElement } from "react";
import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { Button } from "./ui/button";

type Props = {
  children: ReactElement;
};

const ShoppingCart = (props: Props) => {
  const cartReducer = useAppSelector((state) => state.cartSlice);

  return (
    <Drawer direction="left">
      <DrawerTrigger>{props.children}</DrawerTrigger>
      <DrawerContent className="top-0 mt-0 rounded-none w-[300px] ">
        <DrawerClose>
          <Button variant="default" className="right-0 absolute">
            <IoCloseOutline />
          </Button>
        </DrawerClose>
        <DrawerHeader>Cart</DrawerHeader>
        <ScrollArea className=" ">
          {cartReducer?.cart.map((item, idx) => (
            <CartItem key={idx} {...item} />
          ))}
        </ScrollArea>
        <DrawerFooter>
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Total</h4>
            <h4 className="text-xl font-semibold">₹{cartReducer?.total}</h4>
          </div>
          <hr />
          <Button>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
