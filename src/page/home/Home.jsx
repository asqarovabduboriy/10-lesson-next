import React from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/products";
import Main from "../../components/main/Main";
import SectionOne from "../../components/sectionone/SectionOne";
import HomeFrom from "../../components/homeform/HomeFrom";

const Home = () => {
 
  const { data } = useGetProductsQuery();

  return (
    <>
      <Hero />
      <Product products={data} />
      <Main/>
      <SectionOne data={data}/>
      <HomeFrom/>
    </>
  );
};

export default Home;
