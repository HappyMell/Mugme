import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="cart-item-info">
        <span className="name">{name}</span>
        <span className="price">$ {price}.00</span>
        <button className="remove">
          <p>Remove</p>
        </button>
      </div>
      <div className="quantity-wrapper">
        <div className="quantity">{quantity}</div>
        <p className="quantity-label">Quantity</p>
      </div>
    </div>
  );
};

export default CartItem;
