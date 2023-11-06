"use client";
import { getAllProductsAsync } from "@/redux/reducer/productSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Searchproducts() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const search = searchParams.get("category");

  useEffect(() => {
    const query = {
      category: search || "",
    };
    dispatch(getAllProductsAsync({ category: search || "" }));
  }, [search, dispatch]);
  return <div>{search}</div>;
}

export default Searchproducts;
