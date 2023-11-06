"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BiCategoryAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { BsArrowLeftShort } from "react-icons/bs";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "@/redux/reducer/categoryslice";
import styles from "@/styles/style";

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryActions.getAllCategoryAsync());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.category);
  const { cart } = useSelector((state) => state.cart);

  const [isAuthenticated, se] = useState(false);
  const user = "hekki";
  const isSeller = true;

  const [activemenu, setActiveMenu] = useState("nav_menu");
  const [activeMenu2, setactiveMenu2] = useState("nav_menu2");
  const [isSticky, setIsSticky] = useState(false);
  const [SubMenuDetails, setSubMenuDetails] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // categoris call

  //  users call

  // cart call

  // seller call

  // aniamtion categories

  const ToggleMenu = () => {
    if (activemenu === "nav_menu") {
      setActiveMenu("nav_menu nav_phone");
    } else {
      setActiveMenu("nav_menu");
      setactiveMenu2("nav_menu2");
    }
  };

  const ToggleMenu2 = (item) => {
    setSubMenuDetails(item);
    if (activeMenu2 === "nav_menu2") {
      setactiveMenu2("nav_menu2 nav_phone2");
    } else {
      setactiveMenu2("nav_menu2");
    }
  };

  // --------------------------------------sticky navbar---------------

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    // navigate(`/products/search?value=${searchValue}`);
  };

  const handleMenuItemClick = (e, itemData) => {
    ToggleMenu2(itemData);
  };

  const subCateHandel = (i) => {
    const queryParams = new URLSearchParams({
      subCategory: i,
    });
    const url = `/products/search?${queryParams}`;
    // navigate(url);
    ToggleMenu();
  };

  //

  return (
    <>
      <div
        className={` search  shadow-md font-300 sticky  text-black pt-0 md:pt-1`}
      >
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="  h-[60px] min- min-w-fit md:bg-slate-900  md:grid grid-cols-4">
            <div className="hidden md:block text-white m-auto h-[30px] cursor-pointer">
              <Link href="/">
                <Image
                  src="/vercel.svg"
                  alt=""
                  className="h-full"
                  width={30}
                  height={40}
                />
              </Link>
            </div>
            <div className=" md:col-span-2 !m-auto w-[90%] py-[10px] relative">
              <form action="">
                <input
                  type="text"
                  placeholder="search any item.."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="h-[40px] w-full px-2 border-[2px] border-[#06229b] rounded-md f focus:border-spacing-1.5 "
                />

                <button
                  type="submit"
                  onClick={handelSubmit}
                  className="text-white bg-[#050320] absolute right-0 h-[40px] w-[100px] rounded-r-md font-[600]   "
                >
                  Search
                </button>
              </form>
            </div>
            <div className="hidden m-auto  md:flex items-center">
              <div className="flex items-center">
                <div className="relative cursor-pointer mr-[20px]">
                  <Link
                    href={`${isAuthenticated ? "/account/profile" : "/login"}`}
                  >
                    {isAuthenticated ? (
                      <div className=" bg-[#ffffff] !m-auto rounded-full h-[35px] w-[35px] flex items-center justify-center">
                        <h1 className=" text-center text-black mt-[-3px] text-[20px]   font-[600] "></h1>
                      </div>
                    ) : (
                      <CgProfile size={30} color="#fff" />
                    )}
                  </Link>
                </div>
              </div>

              <div className={`flex item-center mx-1`}>
                <div className="relative cursor-pointer mr-[15px] text-white">
                  <Link href="/cart-products">
                    <FiShoppingCart size={30} className="text-white" />
                    <h1 className="absolute right-[-6px] top-[-5px] rounded-full bg-[#eb2828] w-5 h-5 top right p-0 m-0 text-white font-mono text-[14px] font-[50] loading-tight text-center">
                      {`${cart.length}`}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden bg-[#232F3E] h-[39px] md:flex items-center ">
            <div
              className="pl-10 my-auto  relative  text-white text-sm md:text-base duration-300 cursor-pointer catagoris"
              onClick={ToggleMenu}
            >
              <BiMenuAltLeft size={25} className="absolute left-2" />
              <h3 className="  font-[600]"> All Catagogies </h3>
            </div>
            <div className={`hidden  md:block  my-auto ml-12`}>
              <Navbar />
            </div>
            <div className="my-auto">
              <Link
                href={`${isSeller ? "/seller-dashboard" : "/become-seller"}`}
                className="mr-8  text-[#ffffff] font-semibold hover:border-[1px] px-[8px] pt-[9px] pb-[9px]  rounded-md "
              >
                {" "}
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
              </Link>
            </div>
          </div>
        </div>

        {/* show category animation i will try allah borosha */}

        <div
          className={
            activemenu === "nav_menu nav_phone"
              ? "fixed top-0 left-0 w-full h-screen bg-[#00000199]  z-[20000] "
              : null
          }
        >
          <ImCancelCircle
            className={
              activemenu === "nav_menu nav_phone"
                ? "fixed top-3 left-[310px]  z-[20000]  border-[3px] border-black cursor-pointer rounded-[100%] text-white"
                : "hidden"
            }
            size={30}
            onClick={ToggleMenu}
          />
          <div className={activemenu}>
            <div className=" text-left border-b-2 bg-[#01032d] border-b-black  py-2 pl-8 flex items-center">
              <h1 className="font-bold pr-2 text-lg text-white">Hello , </h1>
              <h1 className="font-semibold text-lg text-white ">
                {isAuthenticated ? <p> {user?.name} </p> : <p> Sign In </p>}
              </h1>
            </div>
            <div className="bg-[#445069] text-white py-[2px] m-auto">
              <h2>Best wishes for you</h2>
            </div>
            <div className="pt-3">
              {categories.map((i, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.normalFlex}  justify-between px-4 hover:bg-[#EAEDED] mx-2 text-[16px]  rounded-md cursor-pointer  leading-[26px] forHover `}
                    onClick={(e) => handleMenuItemClick(e, i)} // Pass the 'i' data as an argument
                  >
                    <h3 className=" cursor-pointer select-none m-2  font-[510]    text-gray-600">
                      {i.name}
                    </h3>
                    <h2>
                      <IoIosArrowForward className="text-gray-300" />
                    </h2>
                  </div>
                );
              })}
            </div>

            <div className={activeMenu2}>
              <div
                className="text-left border-b-2 border-black py-2 pl-6 flex  text-lg font-semibold"
                onClick={ToggleMenu2}
              >
                <BsArrowLeftShort size={30} className="cursor-pointer" />
                <h1 className="pl-4 cursor-pointer"> Main Categories</h1>
              </div>
              <div className="pt-3 pb-1">
                <h1 className="text-left pl-8 font-semibold text-lg text-gray-900 mx-2 ">
                  {SubMenuDetails.name}
                </h1>
              </div>

              <hr />
              <hr />

              <div className="pt-1">
                {SubMenuDetails?.children?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:bg-gray-300 mx-2 text-gray-700 hover:text-gray-950  rounded-md leading-[24px] py-[6px]  "
                      onClick={() => subCateHandel(item.name)}
                    >
                      <h2 className="text-left pl-7 cursor-pointer text-[16px] ">
                        {item.name}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full md:hidden bg-[#050320] h-[50px] mx-auto z-50">
          <div className="flex">
            <div className="grow rounded-tr-[30px] ">
              <div className="flex justify-around">
                <button
                  type="button"
                  className="text-center px-3 py-4  flex flex-col justify-center items-center mt-[-5px]"
                  onClick={ToggleMenu}
                >
                  <BiCategoryAlt className="text-white " size={18} />
                  <p className="mt-[1px] text-xs text-white font-[700] ">
                    Category
                  </p>
                </button>
                <Link
                  href={`${isAuthenticated ? "/account/profile" : "/login"}`}
                >
                  <button
                    type="button"
                    className="text-center px-3 py-4  flex flex-col justify-center items-center mt-[-5px]"
                  >
                    <CgProfile className="text-white " size={18} />
                    <p className="mt-[1px] text-xs text-white font-[700] ">
                      Account
                    </p>
                  </button>
                </Link>
                <button
                  type="button"
                  className="text-center px-3 py-4  flex flex-col justify-center items-center mt-[-10px]"
                >
                  <Link href="/" className=" cursor-pointer">
                    <Image
                      src="/vercel.svg"
                      alt=""
                      className="h-[35px] bg-white"
                      width={30}
                      height={40}
                    />
                  </Link>
                </button>
                <Link
                  href={`${isSeller ? "/seller_DashBoard" : "/become-seller"}`}
                >
                  <button
                    type="button"
                    className="text-center px-3 py-4  flex flex-col justify-center items-center mt-[-5px]"
                  >
                    <AiFillDashboard className="text-white " size={18} />
                    <p className="mt-[1px] text-xs text-white font-[700] ">
                      {isSeller ? "Dashboard" : "Shop"}
                    </p>
                  </button>
                </Link>
                <button
                  type="button"
                  className="text-center px-3 py-4  flex flex-col justify-center items-center mt-[-5px] "
                >
                  <Link href="/cart-products" className="relative">
                    <FiShoppingCart
                      className="text-white  relative"
                      size={18}
                    />
                    <span className=" absolute  right-[-7px] top-[-4px] rounded-full bg-[#eb2828] w-5 h-5 top right p-0 m-0 text-white font-mono text-[13px] loading-tight text-center">
                      {/* {cart.length} */}
                    </span>
                    <p className="mt-[1px] text-xs text-white font-[700] ">
                      Cart
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
