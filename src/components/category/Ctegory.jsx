import React from "react";
import "./Ctegory.css";
import { useContext } from "react";
import { ProductContext } from "../../page/home/Home";

const Ctegory = () => {
  const { category } = useContext(ProductContext);
  const { setSelectedCategory } = useContext(ProductContext);
  const {selectedCategory} = useContext(ProductContext);


  let categories = category?.map((el) => (
    <p key={el} style={{ cursor: "pointer", color: selectedCategory === `/category/${el}` ? "rgb(64,191,255)" : "rgb(0,0,0)"  }}>
      <data
        onClick={(e) => setSelectedCategory(e.target.value)}
        value={`/category/${el}`}
      >
        {el}
      </data>
    </p>
  ));
  return (
    <div className="category">
      <p style={{ cursor: "pointer", color: selectedCategory === "/" ? "rgb(64,191,255)" : "rgb(0,0,0)" }}>
        <data onClick={() => setSelectedCategory("/")} value="/">
          All
        </data>
      </p>
      {categories}
    </div>
  );
};

export default Ctegory;
