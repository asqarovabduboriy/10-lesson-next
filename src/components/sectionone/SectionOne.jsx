import React from "react";
import "./Sectionone.css";

import img from "../../assets/imgs/shipping.svg";
import img1 from "../../assets/imgs/refund.svg";
import img2 from "../../assets/imgs/support.svg";
import img3 from "../../assets/imgs/Nike_logo_emblem_logotype 1.png";
import img4 from "../../assets/imgs/figma-1-logo 1.png";
import img5 from "../../assets/imgs/kronos-logo-1-1 1.png";
import { FaStar } from "react-icons/fa6";

const SectionOne = ({ data }) => {
 
let card = data?.slice(1,4).map((el) => (
    <div className="section_one_there" key={el.id}>
      <div className="section_there_img">
        <img src={el.image} alt="" />
      </div>
      <div className="section_there_text">
        <h3 title={el.title}>{el.title}</h3>
        <div className=" section_there_rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < el.rating.rate ? "star" : "star-o"}
            />
          ))}
        </div>
        <h4>${el.price}</h4>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="flex_section">
          <div className="section_one_card">
            <div className="section_one_img">
              <img src={img} alt="" />
            </div>
            <div className="section_one_text">
              <h3>FREE SHIPPING</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="section_one_card">
            <div className="section_one_img">
              <img src={img1} alt="" />
            </div>
            <div className="section_one_text">
              <h3>100% REFUND</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="section_one_card">
            <div className="section_one_img">
              <img src={img2} alt="" />
            </div>
            <div className="section_one_text">
              <h3>SUPPORT 24/7</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        <h2 className="latest_news">LATEST NEWS</h2>

        <div className="section_two_wrapper">
          <div className="section_two_card">
            <div className="section_two_img">
              <img src={img3} alt="" />
            </div>
            <div className="section_two_text">
              <h3>Fashion Industry</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div className="section_two_card">
            <div className="section_two_img">
              <img src={img4} alt="" />
            </div>
            <div className="section_two_text">
              <h3>Best Design Tools</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div className="section_two_card">
            <div className="section_two_img">
              <img src={img5} alt="" />
            </div>
            <div className="section_two_text">
              <h3>HR Community</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>


        <h2 className="latest_news">FEATURED PRODUCTS</h2>

        <div className="section_three">
          {card}
          </div>
      </div>
    </>
  );
};

export default SectionOne;
