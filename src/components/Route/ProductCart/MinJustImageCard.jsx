import Image from "next/image";
import Link from "next/link";
import React from "react";

function MinJustImageCard({ p, key }) {
  return (
    <div key={key} className="w-[45%]   ">
      <Link href={`${`/product/${p.id}`}  `}>
        <div className=" mx-auto p-3 h-[130px] ">
          <Image
            src={``}
            alt=""
            className="w-[100%] h-[100%] text-center "
            width={100}
            height={100}
          />
        </div>
      </Link>
    </div>
  );
}

export default MinJustImageCard;
