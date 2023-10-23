"use client";
import React, { useEffect, useRef, useState } from "react";
import "./BestDeal.css";
import styles from "../../../styles/style";
import { productActions } from "@/app/redux/reducer/productSlice";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import AProductCard from "../ProductCart/AProductCard";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const metadata = {
  title: "Rajdhola.com",
  description: "Rajdhole e-commerce website",
};

function BestDeals() {
  const dispatch = useDispatch();
  const boxRef = useRef(null);

  const { products } = useSelector((state) => state.product);

  // get product


  const btnprev = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width / 2;
  };

  const btnnext = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width / 2;
  };

  const maxPrice = 500;

  const handelClick = () => {
    const queryParams = new URLSearchParams({
      maxPrice: maxPrice.toString(),
    });

    // const url = `/products/search?${queryParams}`;
    // navigate(url);
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div
        className={`${styles.section}  my-3 rounded-sm bg-white h-[390px] py-[10px] px-[20px] relative group overflow-hidden `}
      >
        {/* {isloading ? (
<ProductCart/> 
        ) : ( */}
        <div>
          <div className="flex pb-4">
            <h2 className="text-[21px]  font-semibold text-slate-600">
              Deals Under 500 <span className=" font-medium">৳</span>
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
            className="  bg-[#FFFFFF] border py-6 px-2 text-[30px] absolute top-[34%] left-0 shadow-2xl hidden 600px:group-hover:block transition duration-1000 "
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
            className=" hidden 600px:flex px-3 gap-[7px]  overflow-x-auto custom-scrollbar"
            ref={boxRef}
          >
            {products?.slice(0, 7).map((p, i) => (
              <AProductCard key={i} p={p} />
            ))}
          </div>
          <div className="flex  600px:hidden">
            {products?.slice(0, 7).map((p, i) => (
              <div key={i}>
                <h2>hello</h2>
              </div>
            ))}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default BestDeals;
