"use client"
import React from "react";
import { Bell, Menu, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side  */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 rounded-full bg-gray-100 hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4"/>
        </button>
     
      <div className="relative">
        <input
          type="text"
          placeholder="Search..." className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"/>
          <div className="absolute inset-y-[5.5] left-2 flex items-center pointer-events-none">
            < Search className="text-gray-500 " size={18}/>
          </div>
      </div>
       </div>
      {/* right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="">
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24}/>
            </button>
          </div>
          <div className="relative ">
            <Bell className="cursor-pointer text-gray-500" size={24}/>
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center 
            px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">3</span>
          </div>
          <hr className="w-8 h-7 border border-solid border-gray-300 mx-3 "/>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">Profile</span>
          </div>
        </div>
        <Link href="/setting">
          <Settings className="cursor-pointer text-gray-500" size={24}/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
