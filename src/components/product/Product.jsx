import React, { useState } from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useGetProductsByCategoryQuery } from "../../context/products";

const Product = ({ products }) => {
    
//   const [category, setCategory] = useState("all");

//   const { data } = useGetProductsByCategoryQuery(`${category}/`);
// console.log(data);

  let product = products?.map((el) => (
    <div className="product_card" key={el.id}>
      <div className="product_img">
        <img src={el.image} alt="" />
        <div className="icons_product">
          <button>
            <CiHeart />
          </button>
          <button>
            <IoCartOutline />
          </button>
        </div>
      </div>
      <div className="product_info">
        <h2 title={el.title}>{el.title}</h2>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < el.rating.rate ? "star" : "star-o"}
            />
          ))}
        </div>
        <div className="price_product">
          <p>${el.price}</p>
          <span>$ 150.00</span>
          <b>24% Off </b>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h2 className="title_product">Best Sellers</h2>
        <div className="select_wrapper">
        </div>
        <div className="product_wrapper">{product}</div>
      </div>
    </>
  );
};

export default Product;
