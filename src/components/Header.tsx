"use client";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Hearder = () => {
  const [state, setState] = useState(false);
  const router = useRouter();
  const setStateFalse = () => {
    setState(false);
  };
  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Frames", path: "/frames" },
    { title: "custumize", path: "/pages/custumize" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e: any) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="bg-primary text-secondary flex items-center justify-around py-[5px]">
        <div className="call flex items-center gap-1">
          <p className="text-xs hidden sm:block">contact us:</p>
          <div className="flex items-center gap-1">
            <img src="/svg/phone.png" className="w-5" alt="" />
            <p className="text-xs">9395585260</p>
          </div>
        </div>
        <div className="social-links flex items-center gap-2">
          <p className="text-xs hidden sm:block">we are available in:</p>
          <div className=" flex items-center gap-2">
            <img src="/svg/insta.png" className="w-4" alt="" />
            <img src="/svg/faceboook.png" className="w-4" alt="" />
            <img src="/svg/youtube.png" className="w-4" alt="" />
            <img src="/svg/li.png" className="w-4" alt="" />
          </div>
        </div>
      </div>
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <Link
            className=" text-white font-bold rounded-sm flex items-center justify-center"
            href={"/"}
          >
            <img src="/images/logo.png" className="h-[60px]" alt="" />
          </Link>

          <div className="md:hidden">
            <ShoppingCart>
              <div className="relative cursor-pointer md:hidden mr-4">
                <ShoppingCartIcon />
                <span className="flex items-center justify-center rounded-full font-bold text-xs p-[2px] text-white bg-red-500 absolute -top-[10px] -right-[10px] w-5 h-5">
                  1
                </span>
              </div>
            </ShoppingCart>
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <Link
                  href={item.path}
                  key={idx}
                  className="text-gray-700 hover:text-gray-900"
                >
                  <span className="block">{item.title}</span>
                </Link>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <ShoppingCart>
              <div className="relative cursor-pointer md:block hidden">
                <ShoppingCartIcon />
                <span className="flex items-center justify-center rounded-full font-bold text-xs p-[2px] text-white bg-red-500 absolute -top-[10px] -right-[10px] w-5 h-5">
                  1
                </span>
              </div>
            </ShoppingCart>
            <Link
              href="/pages/login"
              className="block text-gray-700 hover:text-gray-900"
              onClick={setStateFalse}
            >
              Log in
            </Link>
            <Link
              href="/pages/sign"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              onClick={setStateFalse}
            >
              Sign in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Hearder;
