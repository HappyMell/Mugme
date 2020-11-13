import React from "react";

import "./special-item-view.styles.scss";

const SpecialItemView = ({ item }) => (
  <div className="special-list">
    <div className="special-item">
      <div
        className="slider-container"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="special-description">
        <div className="special-description__container">
          <h2 className="title">{item.name}</h2>
          <p className="description">{item.description}</p>
          <p className="price">$ {item.price}.00 USD</p>
          <div className="separator" />
          <div className="add-to-cart">
            <div className="add-to-cart__default">
              <button type="button" className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialItemView;
