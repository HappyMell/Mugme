import React from "react";
import "./item-info.styles.scss";

const ItemInfo = ({ item }) => {
  console.log(item);
  const { imageUrl, price, name, description, options } = item;
  return (
    <div className="item-profile-view__container">
      <div className="slider-container">
        <div className="image-frame">
          <img className="img-big" src={imageUrl} alt="mug" />
        </div>
      </div>
      <div className="description-wrapper">
        <div className="product-content-wrapper">
          <div className="price">$ {price}.00 USD</div>
          <h1 className="title">{name}</h1>
          <p className="description">{description}</p>
          <div className="separator" />
          <div className="add-to-cart">
            <div className="size-wrapper">
              <select className="option-list">
                {options.map((option, id) => (
                  <option className="option" key={id}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="separator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
