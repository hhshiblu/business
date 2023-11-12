"use client";
import { getAllProductsAsync } from "@/redux/reducer/productSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Layout/Header";
import LoadingOverlay from "../Loader/LoadingOverlay";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CateProductCard from "../Route/ProductCart/CateProductCard";
import LatestProduct from "../Route/ProductCart/latestProduct";
import Footer from "../Layout/Footer";

function Searchproducts() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { products, latest_product, isloading, totalProduct } = useSelector(
    (state) => state.product
  );
  const { categories } = useSelector((state) => state.category);

  const category = searchParams.get("category");
  const subCategory = searchParams.get("subCategory");
  const rating = searchParams.get("rating");
  const pageNumber = searchParams.get("pageNumber");
  const searchValue = searchParams.get("searchValue");

  const maxPrice = searchParams.get("maxPrice");

  useEffect(() => {
    const query = {
      category: category || "",
      subCategory: subCategory || "",
      rating: rating || "",

      pageNumber: pageNumber || "",
      searchValue: searchValue || "", // Use the provided searchValue or default to an empty string
    };
    if (maxPrice) {
      query.maxPrice = maxPrice;
    }
    dispatch(getAllProductsAsync(query));
  }, [
    category,
    searchValue,
    pageNumber,
    maxPrice,
    rating,
    subCategory,
    dispatch,
  ]);
  return (
    <div>
      <Header />
      <LoadingOverlay isLoading={isloading} />
      <section className="h-[37px] my-[15px]  bg-gray-300 w-full ">
        <div className="flex items-center text-sm  mt-2 justify-start pl-24  gap-2  w-full  ">
          <Link href="/" className=" my-auto text-center mt-2  ">
            Home
          </Link>
          <span className=" mt-3 ">
            <MdOutlineKeyboardArrowRight />
          </span>
          {/* {segments.map((segment, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="mt-3 ">
                  {" "}
                  <MdOutlineKeyboardArrowRight />{" "}
                </span>
              )}{" "}
              {index === 0 ? (
                <Link
                  href={`/${segment}`}
                  className="mt-2 "
                >{`${segments[0]}`}</Link>
              ) : (
                <span className="mt-2 ">search</span>
              )}
            </React.Fragment>
          ))} */}
        </div>
      </section>

      <section className="py-8 w-11/12 mx-auto">
        <div className="flex   gap-10">
          <div className="  bg-white px-3  800px:w-[45%] 1000px:w-[25%] hidden md:block">
            {maxPrice ? null : (
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                  Price
                </h2>
                {/* <Range
                  step={1}
                  min={priceRange.low}
                  max={priceRange.high}
                  values={state.values}
                  onChange={(values) => setState({ values })}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="w-[70%] h-[6px] bg-slate-200 rounded-full cursor-default ml-2"
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      className="w-[15px] h-[15px] bg-blue-500 rounded-full"
                      {...props}
                    />
                  )}
                /> */}
                <div>
                  {/* <span className="text-red-500 font-semibold text-lg pl-4">
                    ৳ {Math.floor(state.values[0])} -{" "}
                    {Math.floor(state.values[1])} ৳
                  </span> */}
                </div>
              </div>
            )}{" "}
            {/* {subCategory  ? null : ( */}
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`hover:bg-[#EAEDED] text-[16px] rounded-md cursor-pointer leading-[26px] forHover`}
                  onClick={() => handleClick(index)}
                >
                  <label className="flex items-center">
                    <input
                      name="category"
                      type="checkbox"
                      className="h-4 w-4"
                      checked={category === category.name}
                      readOnly
                    />
                    <span className="ml-2 text-gray-500">{category.name}</span>
                  </label>
                </div>
              ))}
            </div>
            {/* )} */}
            <div className="py-5 lg:flex flex-col gap-4 hidden ">
              {latest_product && (
                <LatestProduct
                  title="Latest Products"
                  products={latest_product}
                />
              )}
            </div>
          </div>

          <div className="w-full ">
            <div className="py-2 bg-white mb-4 px-3 rounded-md flex justify-between items-start border">
              <h2 className="text-lg font-medium text-slate-600">
                {totalProduct} Products
              </h2>
              {/* <div className="flex justify-center items-center gap-3">
                <select
                  onChange={(e) => setSortPrice(e.target.value)}
                  className="p-1 border outline-0 text-slate-600 font-semibold"
                  name=""
                  id=""
                >
                  <option value="">Sort By</option>
                  <option value="low-to-high">Low to High Price</option>
                  <option value="high-to-low">High to Low Price</option>
                </select>
                <div className="flex justify-center items-start gap-4 md-lg:hidden">
                  <div
                    onClick={() => setStyles("grid")}
                    className={`p-2 ${
                      styles === "grid" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <BsFillGridFill />
                  </div>
                  <div
                    onClick={() => setStyles("list")}
                    className={`p-2 ${
                      styles === "list" && "bg-slate-300"
                    } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                  >
                    <FaThList />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="pb-8 grid grid-cols-2 gap-[15px] md:grid-cols-2 md:gap-[15px] lg:grid-cols-3 lg:gap-[15px] xl:grid-cols-4 xl:gap-[15px]"></div>
          </div>
        </div>
        <div className="flex justify-end pr-10">
          {/* {totalProduct > parPage && (
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={totalProduct}
              parPage={parPage}
              showItem={Math.floor(totalProduct / parPage)}
            />
          )} */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Searchproducts;
