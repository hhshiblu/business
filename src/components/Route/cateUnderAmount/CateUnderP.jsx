"use client";

import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import AProductCard from "../ProductCart/AProductCard";
import MinUProductCard from "../ProductCart/MinUProductCard";
function CateUnderP() {
  const boxRef = useRef(null);
  const [data, setData] = useState([]);
  const { queryUnderProduct, products } = useSelector((state) => state.product);

  const btnprev = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width / 2;
  };

  const btnnext = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width / 2;
  };

  const maxPrice = 800; // Set your desired max price value

  const handelClick = () => {
    const queryParams = new URLSearchParams({
      maxPrice: maxPrice.toString(),
      category: "phone",
    });

    const url = `/products/search?${queryParams}`;
    // navigate(url);
  };

  return (
    <div>
      <div
        className={`w-11/12 mx-auto my-3 rounded-sm bg-white h-[390px] py-[10px] px-[20px] relative group overflow-hidden`}
      >
        <div className="flex pb-2">
          <h2 className="text-[16px]  sm:text-[18px] md:text-[20px] font-semibold text-slate-600">
            Toy Vehicles & Playsets Under 800{" "}
            <span className=" font-medium">৳</span>
          </h2>
          <div
            className="hidden 600px:block text-[13px] pl-3 sm:text-[14px] sm:pl-6   hover:underline hover:text-red-500 cursor-pointer text-[#007185]"
            onClick={handelClick}
          >
            <h2>See more</h2>
          </div>
        </div>
        <button
          onClick={btnprev}
          className="bg-[#FFFFFF] border py-6 px-2 text-[30px] absolute top-[34%] left-0 shadow-2xl hidden 600px:group-hover:block transition duration-1000"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={btnnext}
          className="bg-[#FFFFFF] border py-6 px-2 text-[30px] absolute top-[34%] right-0 shadow-2xl hidden 600px:group-hover:block transition duration-1000 "
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <div
          className="hidden 600px:flex gap-[7px] px-2    600px:overflow-x-scroll  scrollx custom-scrollbar"
          ref={boxRef}
        >
          {products?.map((p, i) => {
            return <AProductCard p={p} key={i} />;
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-3 600px:hidden">
          {products?.slice(0, 4).map((p, i) => (
            <MinUProductCard p={p} key={i} />
          ))}
        </div>
        <div
          className="block 600px:hidden text-[13px] pl-2 pt-2 sm:text-[14px] sm:pl-6   hover:underline hover:text-red-500 cursor-pointer text-[#007185]"
          onClick={handelClick}
        >
          <h2>See more</h2>
        </div>
      </div>
    </div>
  );
}

export default CateUnderP;
