import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import manImage from "../../assets/man.png";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="welcome-container">
        <div className="welcomeText">
          <h1>
            Welcome to <br /> Martins shop!
          </h1>
          <p>
            Explore our wide range of products carefully curated  <br />to meet your
            needs.
          </p>
          <button className="button">Shop Now</button>
        </div>
        <div className="shopTitle">
          <img className="manImage" src={manImage} alt="" />
        </div>
      </div>
      <div className="explore">
        <h1>Explore Our Products! With Discount!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
