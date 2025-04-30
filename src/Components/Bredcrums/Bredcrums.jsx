import React from "react";
import "./Bredcrums.css";
import arrow_icon from "../../assets/arrow_icon.png";

const Bredcrums = (props) => {
  const { product } = props;
  return (
    <div className="bredcrums">
      Home <img src={arrow_icon} alt="" height="10px" /> Shop
      <img src={arrow_icon} alt="" height="10px" />
      {product.category} <img src={arrow_icon} alt="" height="10px" />
      {product.name} <img src={arrow_icon} alt="" height="30px" />
    </div>
  );
};

export default Bredcrums;
