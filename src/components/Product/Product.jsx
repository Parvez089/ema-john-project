/** @format */

import React from "react";
import "./Product.css";
import shop from "../Shop/Shop.jsx";

const Product = (prop) => {
  const { img, name, seller, ratings, price } = prop.product;
  return (
    <div className='product'>
      <img src={img} alt='' />

      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Menufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>

      <button className='btn-cart'>Add to Cart</button>
    </div>
  );
};

export default Product;
