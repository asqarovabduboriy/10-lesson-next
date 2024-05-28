import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import "./Single.css";
import { useGetSingleProductQuery } from "../../context/products";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import fecbook from "../../assets/imgs/facebook.svg";
import twitter from "../../assets/imgs/twitter.svg";

const Singleroute = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        {
            data ? 

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
              <p>$534,33</p>
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
                <button>-</button>
                <button>1</button>
                <button>+</button>
              </div>

              <div className="add_single">
                <button>
                  {" "}
                  <IoCartOutline /> ADD TO CART
                </button>
                <button>
                  {" "}
                  <CiHeart />{" "}
                </button>
              </div>
            </div>
            <div className="line_single"></div>

            <div className="icons_btn_single">
              <button>
                <img src={fecbook} alt="" />
                Share on Facebook
              </button>
              <button>
                <img src={twitter} alt="" />
                Share on Twitter
              </button>
            </div>
          </div>
          <div className="product_card single">
            <div className="product_img">
              <img src={data?.image} alt="" />
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
        :
        <></>
        }
      </div>
    </>
  );
};

export default Singleroute;
