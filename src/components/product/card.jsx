import React from 'react'
import { useGetProductsQuery } from '../../context/products'
import { useDispatch,useSelector } from 'react-redux'
import {toogleLike} from '../../context/wishlistSlice'
import {addToCart} from '../../context/cartSlice'
import { NavLink } from 'react-router-dom'
import { FaHeart, FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'



const Card = () => {
const {data} = useGetProductsQuery()
const dispatch = useDispatch()

let wishlist = useSelector((state) => state.wishslice.value);

let product = data?.slice(0,4).map((el) => (
  <div className="product_card" key={el.id}>
    <div className="product_img">
    <img src={el.image} alt="" /> 
      <div className="icons_product">
        <button onClick={() => dispatch(toogleLike(el))}>
        {wishlist.some((item) => item.id === el.id) ? (
          <FaHeart style={{ color: "red" }} />
        ) : (
          <CiHeart />
        )}  
        </button>
        <button onClick={() => dispatch(addToCart(el))}>
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
))
  return (
    <>
      <div className="container">
      <div className="product_wrapper" style={{gap:"10px",marginBottom:"50px"}}>{product}</div>
      </div>
    </>
  )
}

export default Card