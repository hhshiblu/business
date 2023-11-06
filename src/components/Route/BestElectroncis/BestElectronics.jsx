"use client";

import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import JustCateImageCard from "./../ProductCart/JustCateImageCard";
import styles from "@/styles/style";
import MinUProductCard from "../ProductCart/MinUProductCard";
import MinJustImageCard from "../ProductCart/MinJustImageCard";

function BestElectronics() {
  const boxRef = useRef(null);
  const { products } = useSelector((state) => state.product);

  const btnprev = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width / 2;
  };

  const btnnext = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width / 2;
  };

  const handelClick = () => {
    const queryParams = new URLSearchParams({
      category: "phone",
    });

    const url = `/products/search?${queryParams}`;
    // navigate(url);
  };

  return (
    <div>
      <div
        className={`${styles.section}  my-3 rounded-sm bg-white h-[350px] 600px:h-[305px] py-[10px] px-[20px] relative group overflow-hidden`}
      >
        <div className="flex pb-2">
          <h2 className="text-[16px]  sm:text-[18px] md:text-[20px] font-semibold text-slate-600">
            Deals Best Electronics
          </h2>
          <div
            className=" hidden 600px:block text-[15px] pl-6 hover:underline hover:text-red-500 cursor-pointer text-[#007185]"
            onClick={handelClick}
          >
            See more
          </div>
        </div>
        <button
          onClick={btnprev}
          className="bg-[#FFFFFF]  border py-6 px-2 text-[30px] absolute top-[34%] left-0 shadow-2xl hidden 600px:group-hover:block transition duration-1000"
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
          className=" hidden  600px:flex gap-[7px]     600px:overflow-x-scroll  p_container custom-scrollbar"
          ref={boxRef}
        >
          {products?.map((p, i) => {
            return <JustCateImageCard p={p} key={i} />;
          })}
        </div>
        <div className=" flex flex-wrap justify-center gap-3 600px:hidden">
          {products?.slice(0, 4).map((p, i) => {
            return <MinJustImageCard p={p} key={i} />;
          })}
        </div>
        <div
          className=" block 600px:hidden text-[15px] pl-6 hover:underline hover:text-red-500 cursor-pointer text-[#007185]"
          onClick={handelClick}
        >
          See more
        </div>
      </div>
    </div>
  );
}

export default BestElectronics;
