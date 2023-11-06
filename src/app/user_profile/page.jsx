import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="bg-white p-10 ">
        <div>
          <div>
            <div className="flex  flex-wrap mx-auto">
              <div className="md:w-[50%] lg:w-[33%] text-left">
                <h3 className="text-[12px] text-gray-600"> Full name</h3>
                <p className="text-[14px] pt-1">Hasanul haque</p>
              </div>

              <div className="md:w-[50%] lg:w-[33%] text-left">
                <h3 className="text-[12px] text-gray-600"> Email</h3>
                <p className="text-[14px] pt-1">haque15-4748@diu.edu.bd</p>
              </div>
              <div className="md:w-[50%] md:pt-[23px] lg:w-[33%] lg:pt-[0px] text-left">
                <h3 className="text-[12px] text-gray-600"> Phone number</h3>
                <p className="text-[14px] pt-1">Enter your phone number!</p>
              </div>
              <div className="md:w-[50%]   md:pt-[23px] lg:w-[33%]  text-left">
                <h3 className="text-[12px] text-gray-600"> Birthday</h3>
                <p className="text-[14px] pt-1">Enter your birthday!</p>
              </div>
              <div className="md:w-[50%]   md:pt-[23px] lg:w-[33%]  text-left">
                <h3 className="text-[12px] text-gray-600"> Gender</h3>
                <p className="text-[14px] pt-1">Enter your gender!</p>
              </div>
            </div>
          </div>

          {/* // password */}
          <div className=" pt-40 flex flex-col gap-4">
            <Link href="#">
              <button className="bg-[#D61355] px-12 text-white  text-[14px] py-2">
                EDIT PROFILE
              </button>
            </Link>
            <Link href="#">
              <button className="bg-[#D61355] px-6 text-white  text-[14px] py-2">
                CHANGE PASSWORD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
