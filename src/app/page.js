"use client";
import { useEffect } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";

import HomeHero from "@/components/Route/HomeHero/HomeHero";
import Cetagories from "@/components/Route/categories/Cetagory";
import BestDeals from "@/components/Route/BestDeals/BestDeals";
import BestElectronics from "@/components/Route/BestElectroncis/BestElectronics";
import { productActions } from "@/redux/reducer/productSlice";
import CateUnderP from "@/components/Route/cateUnderAmount/CateUnderP";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAllProductsAsync());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <HomeHero />
      <BestDeals />
      <Cetagories />
      <BestElectronics />
      <br />
      <br />

      <CateUnderP />
      {/* <Events /> */}
      {/* <FeaturedProduct /> */}
      <br />

      {/* <Subscribe/> */}
      <Footer />
    </main>
  );
}
