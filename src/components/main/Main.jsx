import React from "react";
import "./Main.css";
import img from '../../assets/imgs/shoes-shoe-png-transparent-shoe-images-pluspng-17 1-fotor-bg-remover-20240527124516.png'

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="flex_elment">
            <div className="text_content_main">
              <h2>Adidas Men Running Sneakers</h2>
              <p>Performance and design. Taken right to the edge.</p>
              <button>SHOP NOW</button>
            </div>
            <div className="img_main_content">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
