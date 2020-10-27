import React from "react";
import "./card-hero-product.styles.scss";

const CardHeroProduct = ({ title, backgroundColor, imageUrl }) => (
  <div
    className="card-hero-product"
    style={{ backgroundImage: `url(${imageUrl})`, backgroundColor }}
  >
    <h2 className="title">{title}</h2>
  </div>
);

export default CardHeroProduct;
