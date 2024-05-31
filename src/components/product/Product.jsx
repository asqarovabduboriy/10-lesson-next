import React, { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import {toogleLike} from '../../context/wishlistSlice'
import {addToCart} from '../../context/cartSlice'
import { ProductContext } from "../../page/home/Home";
import Ctegory from "../category/Ctegory";
import Loading from "../loading/Loading";

const Product = () => {
  const usedispatch = useDispatch()
  const {data, isLoading} = useContext(ProductContext);
  let wishlist = useSelector((state) => state.wishslice.value);
  const {setLimit} = useContext(ProductContext);

  let product = data?.map((el) => (
    <div className="product_card" key={el.id}>
      <div className="product_img">
      <img src={el.image} alt="" /> 
        <div className="icons_product">
          <button onClick={() => usedispatch(toogleLike(el))}>
          {wishlist.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <CiHeart />
          )}  
          </button>
          <button onClick={() => usedispatch(addToCart(el))}>
            <IoCartOutline />
          </button>
        </div>
      </div>
      <NavLink to={`/product/${el.id}`}>
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
      </NavLink>
    </div>
  ));



  return (
    <>
      <div className="container">
        <h2 className="title_product">Best Sellers</h2>
        <div className="select_wrapper">
        </div>
        <Ctegory/>
        <div className="product_wrapper">{

          isLoading ? (
            <Loading />
          ) : (
            product
          )
        }</div>
        <div className="load_more"><button onClick={() => setLimit(p=>p+1)}>Load More</button></div>
      </div>
    </>
  );
};

export default Product;
