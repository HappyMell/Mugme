import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, match }) => {
  const { name, price, imageUrl, linkUrl } = item;
  return (
    <div className="collection-item">
      <div className="add-to-cart-wrapper">
        <span className="add-to-cart-wrapper__price">$ {price}.00</span>
        <div className="add-to-cart-wrapper__buttons-wrapper">
          <div className="default-button">
            <button
              onClick={() => addItem(item)}
              className="add-to-cart-button"
              style={{
                backgroundImage: `url('https://uploads-ssl.webflow.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd43f8f81b3fa_shopping_cart-24px.svg')`,
              }}
            ></button>
          </div>
        </div>
      </div>
      <Link
        className="collection-item__link"
        to={`${match.params.categoryId}/${linkUrl}`}
      />
      <div className="collection-item__name">
        <span className="name">{name}</span>
      </div>

      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer"></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
