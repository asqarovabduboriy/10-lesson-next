import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Single.css";
import { useGetSingleProductQuery } from "../../context/products";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import fecbook from "../../assets/imgs/facebook.svg";
import twitter from "../../assets/imgs/twitter.svg";
import Loader from "../../components/loader/Loader";
import {
  incrementCartQuantity,
  decrementCartQuantity,
} from "../../context/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/product/card";
import { toogleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";

const Singleroute = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();
  let wishlist = useSelector((state) => state.wishslice.value);
  const cart = useSelector((state) => state.cart.value);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex_elemnt_single">
              <div className="big_img_wrapper">
                <img src={data?.image} alt="" width={375} height={271} />
                <div className="small_img_wrapper">
                  <div>
                    <img src={data?.image} alt="" />
                  </div>
                  <div>
                    <img src={data?.image} alt="" />
                  </div>
                  <div>
                    <img src={data?.image} alt="" />
                  </div>
                  <div>
                    <img src={data?.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="text_contnet_single">
                <h2>{data?.title}</h2>
                <div className="rating_single">
                  {Array.from({ length: Math.round(data?.rating.rate) }).map(
                    (_, index) => (
                      <FaStar key={index} className="star_card" />
                    )
                  )}
                  <p>{data?.rating.rate}</p>
                  <b>Submit a review</b>
                </div>
                <div className="line_single"></div>
                <div className="price_single">
                  <b>${data?.price}</b>
                  <p>${data?.price}</p>
                  <span>24% Off</span>
                </div>
                <div className="stock_single">
                  <p>Availability:</p>
                  <p>{data?.rating.count}</p>
                </div>
                <div className="stock_single">
                  <p>Category:</p>
                  <p>{data?.category}</p>
                </div>
                <div className="stock_single">
                  <p>Free shipping</p>
                </div>
                <div className="line_single"></div>
                <div className="select_color">
                  <p>Select Color:</p>
                  <div className="red"></div>
                  <div className="green"></div>
                  <div className="blue"></div>
                  <div className="yellow"></div>
                </div>

                <div className="select_size">
                  <p>Size</p>
                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                <div className="line_single"></div>

                <div className="increment">
                  <div className="count">
                    <button
                      onClick={() => dispatch(decrementCartQuantity(data))}

                    >
                      -
                    </button>
                    <button>{1}</button>
                    <button
                      onClick={() => dispatch(incrementCartQuantity(data))}
                    >
                      +
                    </button>
                  </div>

                  <div className="add_single">
                    <button onClick={() => dispatch(addToCart(data))}>
                      <IoCartOutline /> ADD TO CART
                    </button>
                    <button onClick={() => dispatch(toogleLike(data))}>
                      {wishlist.some((item) => item.id === data.id) ? (
                        <FaHeart style={{ color: "red" }} />
                      ) : (
                        <CiHeart />
                      )}
                    </button>
                  </div>
                </div>
                <div className="line_single"></div>

                <div className="icons_btn_single">
                  <button>
                    <img src={fecbook} alt="" />
                    Share on Facebook
                  </button>
                  <button style={{ backgroundColor: "rgb(29, 155, 240)" }}>
                    <img src={twitter} alt="" />
                    Share on Twitter
                  </button>
                </div>
              </div>
              <div className="product_card single">
                <div className="product_img">
                  <img src={data?.image} alt="" />
                  <div className="icons_product">
                    <button onClick={() => dispatch(toogleLike(data))}>
                      {wishlist.some((item) => item.id === data.id) ? (
                        <FaHeart style={{ color: "red" }} />
                      ) : (
                        <CiHeart />
                      )}
                    </button>
                    <button onClick={() => dispatch(addToCart(data))}>
                      <IoCartOutline />
                    </button>
                  </div>
                </div>
                <div className="product_info">
                  <h2 title={data?.title}>{data?.title}</h2>
                  <div className="rating">
                    {Array.from({ length: Math.round(data?.rating.rate) }).map(
                      (_, index) => (
                        <FaStar key={index} className="star_card" />
                      )
                    )}
                  </div>
                  <div className="price_product">
                    <p>${data?.price}</p>
                    <span>$ 150.00</span>
                    <b>24% Off </b>
                  </div>
                </div>
              </div>
            </div>

            <div className="haraktretika">
              <div className="haraktretika_text">
                <ul>
                  <li>Product Infomation </li>
                  <li>Reviews</li>
                  <li>Another tab</li>
                </ul>
              </div>
              <div className="haraktretika_line"> </div>

              <div className="haraktretika_text_p">
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
            </div>

            <h1 className="related_products_title">RELATED PRODUCTS</h1>
            <Card />
          </>
        )}
      </div>
    </>
  );
};

export default Singleroute;
