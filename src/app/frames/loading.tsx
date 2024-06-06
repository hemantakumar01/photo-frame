"use client";
import React from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center ">
      <HashLoader color="#000000" className="w-[100px]" />
    </div>
  );
};

export default loading;
