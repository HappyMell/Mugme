import React from "react";
import "../../styles/global-styles.scss";
import "./homepage-collection-list.styles.scss";
import { Link } from "react-router-dom";

const HomepageCollectionList = ({ price, title, imageUrl, match, linkUrl }) => {
  console.log(match);
  return (
    <div className="collection-list-wrapper">
      <div className="collection-list">
        <div className="item">
          <div className="card">
            <div className="add-to-cart-wrapper">
              <p className="price">$ {price} USD</p>
              <div className="buttons-wrapper">
                <button
                  type="button"
                  style={{
                    backgroundImage: `url(https://uploads-ssl.webflow.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd43f8f81b3fa_shopping_cart-24px.svg)`,
                  }}
                ></button>
              </div>
            </div>
            <Link className="home-link" to={`${match.url}${linkUrl} `} />
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
};

export default HomepageCollectionList;
