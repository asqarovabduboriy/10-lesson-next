import React, { createContext, memo } from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/products";
import Main from "../../components/main/Main";
import SectionOne from "../../components/sectionone/SectionOne";
import HomeFrom from "../../components/homeform/HomeFrom";
export const ProductContext = createContext();
const Home = () => {
  const { data } = useGetProductsQuery();

  return (
    <>
      <ProductContext.Provider value={data}>
        <Hero />
        <Product />
        <Main />
        <SectionOne />
        <HomeFrom />
      </ProductContext.Provider>
    </>
  );
};

export default memo(Home);
