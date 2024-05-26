import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_img">
          <div className="container">
            <div className="banner_content">
              <h1 className="banner_title">Super Flash Sale 50% Off</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
     <div className="card_warpper">
     <div className="hero_card">
          <div className="hero_content">
          <h2>FS - QUILTED MAXI CROSS BAG</h2>
          <div className="price">
                <p>$534,33</p>
                <span>24% Off</span>
          </div>
          <p className="old_price">$299,43</p>
          </div>
        </div>
        <div className="hero_card_two">
          <div className="hero_content">
          <h2>FS - QUILTED MAXI CROSS BAG</h2>
          <div className="price">
                <p>$534,33</p>
                <span>24% Off</span>
          </div>
          <p className="old_price">$299,43</p>
          </div>
        </div>
        <div className="hero_card_there">
          <div className="hero_content">
          <h2>FS - QUILTED MAXI CROSS BAG</h2>
          <div className="price">
                <p>$534,33</p>
                <span>24% Off</span>
          </div>
          <p className="old_price">$299,43</p>
          </div>
        </div>
     </div>
      </div>
    </>
  );
};

export default Hero;
