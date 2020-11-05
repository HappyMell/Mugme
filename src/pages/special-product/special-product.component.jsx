import React from "react";
import { Route } from "react-router-dom";

import SpecialItem from "../../components/special-item/special-item.component";

import "./special-product.styles.scss";

const SpecialProduct = ({ match }) => {
  return (
    <div className="product-of-the-month">
      <Route path={`${match.path}`} component={SpecialItem} />
    </div>
  );
};

export default SpecialProduct;
