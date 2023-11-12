import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";

const latestProduct = ({ title, products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-slate-600">{title}</div>
        <div className="flex justify-center items-center gap-3 text-slate-600">
          <button
            onClick={() => previous()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <span>
              <FiChevronRight />
            </span>
          </button>
          <button
            onClick={() => next()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <span>
              <FiChevronLeft />
            </span>
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="flex gap-8 flex-col-reverse ">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {products.map((p, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-start gap-4 py-3 px-1"
            >
              {p.map((pl, j) => (
                <div key={j} className="flex justify-start items-start pb-2">
                  <Link href={`${`/product/${pl._id}`}`}>
                    <Image
                      className="w-[100px] h-[100px] rounded-md shadow-lg p-1"
                      src={`upload/${pl && pl.images[0]}`}
                      alt="images"
                      width={100}
                      height={100}
                    />
                  </Link>

                  <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
                    <Link to={`${`/product/${pl._id}`}`}>
                      <h2 className="hover:text-red-600">
                        {pl.name.length > 20
                          ? pl.name.slice(0, 20) + "..."
                          : pl.name}
                      </h2>
                    </Link>
                    <h5 className={`font-Roboto font-semibold text-black `}>
                      {pl.originalPrice === 0
                        ? pl.originalPrice
                        : pl.discountPrice}
                      <span> ৳ </span>{" "}
                    </h5>
                    <div className="flex ">
                      <h4
                        className={`font-[500] text-sm text-[#f1331e] mt-[-3px]   line-through`}
                      >
                        {pl.originalPrice ? pl.originalPrice + " ৳" : null}
                      </h4>
                      <div className="text-sm  text-blue-950 pl-4 mt-[-3px]">
                        (
                        {(pl.originalPrice === 0
                          ? 0
                          : ((pl.originalPrice - pl.discountPrice) /
                              pl.originalPrice) *
                            100
                        ).toFixed(0)}
                        %)
                      </div>
                    </div>
                  </div>

                  <hr />
                  <hr />
                  <hr />
                </div>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default latestProduct;
