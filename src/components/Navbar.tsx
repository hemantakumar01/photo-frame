"use client";
import { AlignJustify } from "lucide-react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="mobile flex items-center justify-between px-3">
        <span className="bg-blue-300 px-2 py-1 text-white font-bold rounded-md">
          Fram Karo
        </span>
        <AlignJustify />
      </div>
    </div>
  );
};

export default Navbar;
