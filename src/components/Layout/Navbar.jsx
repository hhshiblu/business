import React, { useState } from "react";

import Link from "next/link.js";

import { navItems } from "@/app/staticData/data";
const Navbar = () => {
  return (
    <>
      <div className={`flex items-center`}>
        {navItems &&
          navItems.map((i, index) => {
            return (
              <div className="flex" key={index}>
                <Link
                  href={i.url}
                  className={` text-white px-6 items-center cursor-pointer font-[400] text-[15px] hover:border-[1px]  pt-[9px] pb-[6px] rounded-md`}
                >
                  {i.title}
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Navbar;
