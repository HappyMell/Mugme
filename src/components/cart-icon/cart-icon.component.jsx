import React from "react";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart" onClick={toggleCartHidden}>
    <div className="cart__button">
      <Cart className="cart-icon" />
      <span className="cart-quantity">3</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
