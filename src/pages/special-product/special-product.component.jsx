import React from "react";
import { Route } from "react-router-dom";
import { selectCategory } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { connect } from "react-redux";

import "./special-product.styles.scss";

const SpecialProduct = ({ collection, match }) => {
  console.log(collection);
  return (
    <div className="product-of-the-month">
      <div className="product-container"></div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.path)(state),
});

export default connect(mapStateToProps)(SpecialProduct);
