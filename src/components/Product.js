import React from "react";
import '../styles/Product.css'

const Product = ({ pimage, preview, pname, pPrice }) => {
  return (
    <>
      <div className="Product">
        <img src={pimage} alt="1 position" />
        <p>{pname}</p>
        <p>{preview}</p>
        <p>{pPrice}</p>
      </div>
    </>
  );
};

export default Product;
