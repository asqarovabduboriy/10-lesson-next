import React, { createContext, memo, useState } from "react";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/products";
import { useGetProductsByCategoryQuery } from "../../context/products";
import Main from "../../components/main/Main";
import SectionOne from "../../components/sectionone/SectionOne";
import HomeFrom from "../../components/homeform/HomeFrom";
export const ProductContext = createContext();
const Home = () => {
  const [limit, setLimit] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("/");

  const { data } = useGetProductsQuery({
    params: { limit: 4 * limit },
    path: selectedCategory ?  selectedCategory : "/",
  });
  const { data: category } = useGetProductsByCategoryQuery();

  return (
    <>
      <ProductContext.Provider value={{ data, category, setSelectedCategory,selectedCategory,setLimit}}>
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
