import React from "react";
import "../../styles/global-styles.scss";
import "./homepage-collection-list.styles.scss";

const HomepageCollectionList = ({ price, title, imageUrl, options }) => (
  <div className="collection-list-wrapper">
    <div className="collection-list">
      <div className="item">
        <div className="card">
          <div className="add-to-cart-wrapper">
            <p className="price">$ {price} USD</p>
            <div className="buttons-wrapper">
              <select>
                {options.map((option, id) => (
                  <option key={id} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                style={{
                  backgroundImage: `url(https://uploads-ssl.webflow.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd43f8f81b3fa_shopping_cart-24px.svg)`,
                }}
              ></button>
            </div>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
          <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default HomepageCollectionList;
