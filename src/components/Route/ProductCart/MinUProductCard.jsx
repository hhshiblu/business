import Image from "next/image";
import Link from "next/link";
import React from "react";

function MinUProductCard({ p, key }) {
  return (
    <div key={key} className="w-[45%]   ">
      <Link href={`${`/product/${p.id}`}  `}>
        <div className=" mx-auto p-3 h-[130px]  rounded-md">
          <Image
            src={``}
            alt=""
            className="w-[100%] h-[100%] text-center "
            width={100}
            height={100}
          />
        </div>
      </Link>
      <div className="flex  gap-3  ">
        <div className=" bg-[#CC0C39] rounded-sm px-[5px] py-[2px]  font-semibold  text-white text-[10px]">
          {(p.originalPrice === 0
            ? null
            : ((p.originalPrice - p.discountPrice) / p.originalPrice) * 100
          ).toFixed(0)}
          % off
        </div>
        <div className="text-[#CC0C39] font-bold text-[12px]   ">Deal</div>
      </div>
    </div>
  );
}

export default MinUProductCard;
