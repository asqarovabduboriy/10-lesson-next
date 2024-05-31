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
  const [limited, setLimit] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("/");
  let url = selectedCategory ? selectedCategory : "/"
  const { data, isLoading } = useGetProductsQuery({params: { limit: 4 * limited }, path: url,  });
  const { data: category } = useGetProductsByCategoryQuery();

  return (
    <>
      <ProductContext.Provider
        value={{
          data, 
          isLoading,
          category,
          setSelectedCategory,
          selectedCategory,
          setLimit,
         
        }}
      >
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
