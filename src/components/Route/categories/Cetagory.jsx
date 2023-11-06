"use client";

import styles from "@/styles/style";
import Image from "next/image";
import React from "react";

import { useSelector } from "react-redux";

function Cetagory() {
  const { categories } = useSelector((state) => state.category);
  const SubmitHendel = (i) => {
    const queryParams = new URLSearchParams({
      category: i?.name,
    });

    const url = `/products/search?${queryParams}`;
  };
  return (
    <div>
      {/* catagory */}

      <div
        className={`${styles.section} bg-white px-3  rounded-lg mb-12`}
        id="cetagoris"
      >
        <div
          className={`text-[16px] pt-3 pl-4 sm:text-[18px] md:text-[20px] font-semibold text-slate-600`}
        >
          <h1>Categoris</h1>
        </div>
        <div className=" p-4 hidden 600px:grid  grid-cols-3 gap-[5px] md:grid-cols-4 md:gap-[10px] lg:grid-cols-5 lg:gap-[10px] xl:grid-cols-7 xl:gap-[10px]">
          {categories &&
            categories?.slice(0, 9).map((i, index) => {
              return (
                <div
                  key={index}
                  className="w-full overflow-hidden hover:shadow-blue-100  bg-gray-100 rounded-md  cursor-pointer  flex items-center flex-col justify-between"
                  onClick={() => SubmitHendel(i)}
                >
                  <Image
                    src=""
                    alt={i.title}
                    className="w-[70px] h-[70px] rounded-full object-cover mt-2 transform hover:scale-110 transition duration-300"
                  />
                  <h5 className=" text-sm px-2 mb-2 ">{i.name}</h5>
                </div>
              );
            })}
        </div>

        <div className=" p-3 grid 600px:hidden grid-cols-3 gap-[5px] md:grid-cols-4 md:gap-[10px] lg:grid-cols-5 lg:gap-[10px] xl:grid-cols-7 xl:gap-[10px]">
          {categories &&
            categories?.slice(0, 6).map((i, index) => {
              return (
                <div
                  key={index}
                  className="w-full overflow-hidden hover:shadow-blue-100  bg-gray-100 rounded-md  cursor-pointer  flex items-center flex-col justify-between"
                  onClick={() => SubmitHendel(i)}
                >
                  <Image
                    src=""
                    alt={i.title}
                    className="w-[70px] h-[70px] rounded-full object-cover mt-2 transform hover:scale-110 transition duration-300"
                  />
                  <h5 className=" text-sm px-2 mb-2 ">{i.name}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cetagory;
