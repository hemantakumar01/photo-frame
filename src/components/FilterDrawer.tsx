"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { SquareX } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const colors = ["red", "green", "blue", "yellow", "purple"];
type Props = {};

const FilterDrawer = (props: Props) => {
  const [filter, setFilter] = useState(0);
  return (
    <Drawer>
      <div className="mobilFilters  fixed  left-0 flex  w-full bottom-0 sm:hidden">
        <DrawerTrigger
          className="flex-1 bg-slate-50 py-4 border-t border-r rounded-none text-xs font-semibold"
          onClick={() => setFilter(0)}
        >
          Filter
        </DrawerTrigger>
        <DrawerTrigger
          className="flex-1 bg-slate-50 py-3 border-t  rounded-none text-xs font-semibold"
          onClick={() => setFilter(1)}
        >
          Sort
        </DrawerTrigger>
      </div>
      {filter === 0 && (
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <span>Filter</span>
              <DrawerClose>
                <SquareX />
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 flex gap-2 flex-col">
            <h3 className="font-semibold">Category</h3>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="py-1 w-full ">
                  All
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Apple" id="Apple" />
                <Label htmlFor="Apple" className="py-1 w-full">
                  Option Two
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="samsung" id="samsung" />
                <Label htmlFor="samsung" className="py-1 w-full">
                  Samsung
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="py-1 w-full">
                  Option Two
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="p-4 size flex flex-col gap-2">
            <h3 className="font-semibold">Colors</h3>
            <div className="color-selector flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <RadioGroup key={index}>
                  <RadioGroupItem
                    value="red"
                    className={`bg-${color}-500 border-none`}
                  />
                </RadioGroup>
              ))}
            </div>
          </div>
          <div className="p-4 size flex flex-col gap-2">
            <h3 className="font-semibold">Size</h3>
            <div className="size flex gap-3 overflow-scroll">
              <Card className="py-1 px-2">M</Card>
              <Card className="py-1 px-2">S</Card>
              <Card className="py-1 px-2">L</Card>
              <Card className="py-1 px-2">XL</Card>
              <Card className="py-1 px-2">XXL</Card>
            </div>
          </div>
          <div className="p-4 size flex flex-col gap-2">
            <h3 className="font-semibold">Price</h3>
            <Slider defaultValue={[440]} max={1000} step={1} />
          </div>
          <DrawerFooter>
            <Button>Apply</Button>
          </DrawerFooter>
        </DrawerContent>
      )}
      {filter === 1 && (
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <span>Sort</span>
              <DrawerClose>
                <SquareX />
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <RadioGroup defaultValue="all" className="p-4">
            <div className="flex items-center space-x-2  ">
              <RadioGroupItem value="all" id="all" />
              <Label className="py-1 w-full " htmlFor="all">
                All
              </Label>
            </div>

            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="asc" id="asc" />
              <Label className="py-1 w-full " htmlFor="asc">
                Low to High
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="dec" id="dec" />
              <Label className="py-1 w-full " htmlFor="dec">
                High to Low
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="popular" id="popular" />
              <Label className="py-1 w-full " htmlFor="popular">
                Popular
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-1">
              <RadioGroupItem value="rating" id="rating" />
              <Label className="py-1 w-full " htmlFor="rating">
                Rating
              </Label>
            </div>
          </RadioGroup>

          <DrawerFooter>
            <Button>Apply</Button>
          </DrawerFooter>
        </DrawerContent>
      )}
    </Drawer>
  );
};

export default FilterDrawer;
