import React from "react";
import { Link } from "react-router-dom";

import styles from "../../../styles/style";


function CateProductCard({ data }) {
  const percentageDiscount =
    data.originalPrice === 0
      ? 0
      : ((data.originalPrice - data.discountPrice) / data.originalPrice) * 100;

  return (
    <div className="bg-white hover:shadow-lg rounded-md">
      <div className="w-full h-auto mb- p-3 relative rounded-md  cursor-pointer ">
        <div className=" flex  justify-end m-auto"></div>
        <Link to={`${`/product/${data._id}`}`}>
   
        </Link>
        <Link to={`/shop/view/${data?.seller._id}`}>
          <h5 className="text-[#0C134F] pb-0.5 text-xs font-[500]">
            {data.seller.name}
          </h5>
        </Link>
        <Link to={`${`/product/${data._id}`}`}>
          <h5 className="pb-1 font-[500] text-sm md:text-lg  hover:text-red-500">
            {data.name.length > 20 ? data.name.slice(0, 35) + "..." : data.name}
          </h5>
        </Link>

        <h5 className={`${styles.productDiscountPrice}`}>
          {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}
          <span className=" font-semibold"> ৳</span>
        </h5>
        <div className="flex ">
          <h4
            className={`font-[500] text-sm text-[#f1331e] pt-1   line-through`}
          >
            {data.originalPrice ? data.originalPrice + " ৳" : null}
          </h4>
          <div className="text-sm  text-blue-950 pl-4">
            ({percentageDiscount.toFixed(0)}%)
          </div>
        </div>

        <div className="flex items-center">

          <div className="ml-3 text-gray-500"></div>
          <span>({data?.sold_out})</span>
          <h1> </h1>
        </div>
      </div>
    </div>
  );
}

export default CateProductCard;
