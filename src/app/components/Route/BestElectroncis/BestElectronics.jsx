"use client"

import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import JustCateImageCard from './../ProductCart/JustCateImageCard';
import styles from "@/app/styles/style";

function BestElectronics() {
    const boxRef = useRef(null);
 const {  products} = useSelector((state) => state.product);



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
        className={`${styles.section}  my-3 rounded-sm bg-white h-[305px] py-[10px] px-[20px] relative group overflow-hidden`}
      >
        <div className="flex pb-4">
          <h2 className="text-[21px]  font-semibold text-slate-600">
            Deals Best Electronics
          </h2>
          <div
            className="text-[15px] pl-6 hover:underline hover:text-red-500 cursor-pointer text-[#007185]"
            onClick={handelClick}
          >
            See more
          </div>
        </div>
        <button
          onClick={btnprev}
          className="bg-[#FFFFFF] border py-6 px-2 text-[30px] absolute top-[34%] left-0 shadow-2xl hidden group-hover:block transition duration-1000"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={btnnext}
          className="bg-[#FFFFFF] border py-6 px-2 text-[30px] absolute top-[34%] right-0 shadow-2xl hidden group-hover:block transition duration-1000 "
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        <div
          className="flex gap-[7px]     overflow-x-scroll  p_container custom-scrollbar"
          ref={boxRef}
        >
          {products?.map((p, i) => {
            return <JustCateImageCard p={p} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BestElectronics;
