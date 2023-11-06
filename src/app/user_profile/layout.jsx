"use client";
import React, { useState } from "react";

import { RxPerson } from "react-icons/rx";

import "@/components/Layout/DashBoard.css";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { AiOutlineLogin, AiOutlineMenuFold } from "react-icons/ai";
import { useSelector } from "react-redux";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import Footer from "@/components/Layout/Footer";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  //   const { user } = useSelector((state) => state.user);
  const [filterShow, setFilterShow] = useState(false);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const part = parts[parts.length - 1];

  return (
    <div>
      <Header />

      <div className="bg-slate-200 hidden md:block">
        <div className="h-full mx-auto ">
          <div className="pt-2 flex md:w-[95%] lg:w-[90%] mx-auto">
            <div
              className={` animation_sidebar rounded-md z-50 h-[80vh] bg-white overflow-hidden !w-[280px]  ml-4  `}
            >
              <div className="flex pl-24 py-2">
                <h1>hello , </h1>
                <p className="text-[14px] pt-[3px] pl-1"> hasnaul haque </p>
              </div>
              <ul className="py-2 text-slate-600 px-2">
                <li className="flex justify-start items-center gap-2 py-2 pl-1">
                  <Link href="/user_profile">
                    <span className="text-xl">
                      <RxPerson />
                    </span>
                  </Link>

                  <Link href="/user_profile" className="block pl-4">
                    Profile
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 pl-1">
                  <Link href="all-orders">
                    <span className="text-xl">
                      <HiOutlineShoppingBag />
                    </span>
                  </Link>
                  <Link href="all-orders" className="block pl-4">
                    Orders
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 pl-1">
                  <Link href="refund-orders">
                    <span className="text-xl">
                      <HiOutlineReceiptRefund />
                    </span>
                  </Link>
                  <Link href="refund-orders" className="block pl-4">
                    Refunds
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2 pl-1">
                  <Link href="Tract-order">
                    <span className="text-xl">
                      <MdOutlineTrackChanges />
                    </span>
                  </Link>

                  {/* {!filterShow && ( */}
                  <Link href="Tract-order" className="block pl-4">
                    Tract_order
                  </Link>
                  {/* )}{" "} */}
                </li>
                <li className="flex justify-start items-center gap-2 py-2 pl-1">
                  <Link href="/user_profile/address">
                    <span className="text-xl">
                      <TbAddressBook />
                    </span>
                  </Link>

                  <Link href="/user_profile/address" className="block pl-4">
                    Address
                  </Link>
                </li>

                <li
                  className="flex justify-start items-center gap-2 py-2 pl-1"
                  //   onClick={logoutHandler}
                >
                  <span className="text-xl">
                    <AiOutlineLogin />
                  </span>

                  <h1 className="block pl-4">Log_out</h1>
                </li>
              </ul>
            </div>
            <div className=" w-full">
              <div className="mx-4 md-lg:mx-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default Layout;
