"use client";
import { useEffect } from "react";
import Image from "next/image";
import Header from "./components/Layout/Header";
import HomeHero from "./components/Route/HomeHero/HomeHero";
import BestDeals from "./components/Route/BestDeals/BestDeals";
import Cetagories from "./components/Route/categories/Cetagory";
import BestElectronics from "./components/Route/BestElectroncis/BestElectronics";
import CateUnderP from "./components/Route/cateUnderAmount/CateUnderP";
import FeaturedProduct from "./components/Route/FeaturedProduct/FeaturedProduct";
import Footer from "./components/Layout/Footer";
import { useDispatch } from "react-redux";
import { productActions } from "./redux/reducer/productSlice";
import { categoryActions } from "./redux/reducer/categoryslice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAllProductsAsync());
    dispatch(categoryActions.getAllCategoryAsync());
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
