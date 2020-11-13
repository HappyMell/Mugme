import React from "react";

import "./shop-description.styles.scss";

const ShopDescription = ({ descriptionBottom, match }) => {
  return (
    <div className="description-wrapper-container">
      <div className="description-list">
        {descriptionBottom.map((description) => (
          <div className="item" key={description.id}>
            <img src={description.imageUrl} alt="mug " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDescription;
