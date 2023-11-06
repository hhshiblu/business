import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Searchproducts from "@/components/user/Searchproducts";
import { getAllProductsAsync } from "@/redux/reducer/productSlice";
import { getServerSession } from "next-auth";
import { useSearchParams } from "next/navigation";
import React from "react";

async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Searchproducts />
      <p> {JSON.stringify(session)} </p>
    </div>
  );
}

export default Page;
