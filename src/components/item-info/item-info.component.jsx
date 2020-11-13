import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ShopDescription from "../shop-description/shop-description.component";
import HomepageCollectionList from "../homepage-collection-list/homepage-collection-list.component";
import HomeFeatures from "../home-features/home-features.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./item-info.styles.scss";
import {
  selectHomepageSections,
  selectFeatures,
} from "../../redux/directory/directory.selectors";

const ItemInfo = ({
  item,
  descriptionBottom,
  homePageSections,
  features,
  addItem,
  match,
}) => {
  const { imageUrl, price, name, description } = item;
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
            <div className="add-to-cart">
              <div className="add-to-cart__default">
                <button
                  type="button"
                  className="add-to-cart-button"
                  onClick={() => addItem(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="descripton-bottom">
        <ShopDescription descriptionBottom={descriptionBottom} />
      </div>
      <div className="related-products">
        <p>You may also be interested in ...</p>
      </div>
      <div className="homepage-collection">
        {homePageSections.map(({ id, ...otherCollectionProps }) => (
          <HomepageCollectionList
            key={id}
            {...otherCollectionProps}
            match={match}
          />
        ))}
      </div>
      <div className="homepage-collection">
        {features.map(({ id, icon, title }) => (
          <HomeFeatures key={id} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  homePageSections: selectHomepageSections,
  features: selectFeatures,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);
