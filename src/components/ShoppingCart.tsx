"use client";
import React, { ReactElement } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "./CartItem";
import { Cross } from "lucide-react";
import { FaCross } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  children: ReactElement;
};

const ShoppingCart = (props: Props) => {
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
        <ScrollArea>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollArea>
        <DrawerFooter>
          <Button>Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
