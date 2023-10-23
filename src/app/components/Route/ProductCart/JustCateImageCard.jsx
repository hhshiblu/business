import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



function JustCateImageCard({p}) {
  return (
    <div className="min-w-[210px] pb-4   max-w[211px] ">
      <Link href={`${`/product/${p._id}`} `}>
        <div className=" p-2 h-[200px] w-[210px] rounded-md">
          <Image
            src=""
            alt={p?.name}
            className="w-[100%] h-[100%] mx-auto"
            width={100}
            height={100}
          />
        </div>
      </Link>
     
    </div>
  );
}

export default JustCateImageCard