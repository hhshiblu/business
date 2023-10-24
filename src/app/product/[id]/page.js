"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductDetailLoader from "@/app/components/Loader/ProductDetailLoader.jsx";
import Header from "@/app/components/Layout/Header.jsx";
import Footer from "@/app/components/Layout/Footer.jsx";
import ProductDetails from "@/app/components/product/productDetails";
import { getSingleProductAsync } from "@/app/redux/reducer/productSlice";

// import ProductDetailLoader from "./../component/Loader/ProductDetailLoader";
function Page({params}) {
  const dispatch = useDispatch();

  const { product,isloading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(  getSingleProductAsync(params.id));
  }, [params.id, dispatch]);

  return (
    <div>
      {isloading ? (
        <div>
          <ProductDetailLoader />
        </div>
      ) : (
        <div>
          <Header />
          {product && (
            <ProductDetails
              data={product}
              // products={moreProducts}
         
            />
          )}
            {/* <ShopProduct products={moreProducts} /> */}
            <br /> <br />
          {/* {relatedProducts && <SuggestProduct data={relatedProducts} />} */}
          <div></div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
