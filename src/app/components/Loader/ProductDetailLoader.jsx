import React from "react";
import "./SellerLoader.css";

function ProductDetailLoader() {
  return (
    <div
      className=" w-full  gap-5 p-2 mx-auto bg-white shadow-lg select-none  rounded-md  h-screen"
      style={{ height: "100vh" }}
    >
      <div className="w-full bg-gray-300 animate-pulse h-20 rounded-2xl"></div>
      <div className="w-11/12  flex flex-col pt-4  gap-5 p-2 mx-auto   md:flex-row  ">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-300 h-52 sm:h-[34vh] md:h-[45vh] md:w-full sm:w-full rounded-xl animate-pulse"></div>
          <div className=" flex flex-row gap-5">
            <div className="bg-gray-200 h-20  w-16 rounded-xl animate-pulse"></div>
            <div className="bg-gray-200 h-20 w-16 rounded-xl animate-pulse"></div>
            <div className="bg-gray-200 h-20  w-16 rounded-xl animate-pulse"></div>
            <div className="bg-gray-200 h-20 w-16 rounded-xl animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-raw flex-1  gap-5 w-full sm:p-2">
          <div className="flex flex-col flex-1 gap-3 pr-4">
            <div className="w-full bg-gray-300 animate-pulse h-20 rounded-2xl"></div>
            <div className="w-full h-10 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-72 h-8 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-[70vh] hidden lg:block h-8 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full  hidden lg:block  h-10 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full  hidden lg:block  h-10 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="flex flex-row">
              <div className="w-[30%] mx-auto  md:mt-22 h-10 mt-14 bg-gray-200 animate-pulse rounded-2xl"></div>
              <div className="w-[30%] mx-auto md:mt-22 h-10 mt-14 bg-gray-200 animate-pulse rounded-2xl"></div>
            </div>
          </div>

          <div className=" hidden lg:block">
            <div
              className="bg-gray-300 h-[60vh] sm:h-[40vh] sm:w-52 pl-20 rounded-xl animate-pulse"
              style={{ height: "60vh" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto  flex-col mt-10 hidden  md:flex">
        <div className="w-full mx-auto my-4 h-8 bg-gray-200 rounded-full animate-pulse"></div>

      </div>
    </div>
  );
}

export default ProductDetailLoader;
