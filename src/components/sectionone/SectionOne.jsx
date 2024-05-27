import React from "react";
import "./Sectionone.css";

import img from "../../assets/imgs/shipping.svg";
import img1 from "../../assets/imgs/refund.svg";
import img2 from "../../assets/imgs/support.svg";


const SectionOne = () => {
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
      </div>
    </>
  );
};

export default SectionOne;
