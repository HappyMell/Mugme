import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartModal from "../cart-modal/cart-modal.component";
import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";

const Header = ({ hidden }) => (
  <div className="header">
    <div className="header__container">
      <div className="nav-menu">
        <div className="menu-item-wrapper">
          <Link className="menu-item" to="/category/graphic">
            GRAPHIC
          </Link>
          <Link className="menu-item" to="/category/emoticon">
            EMOTICON
          </Link>
          <Link className="main-link" to="/special">
            SPECIAL PRODUCT
          </Link>
        </div>
      </div>
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="cart-wrapper">
        <Link to="/about" className="cart-item">
          ABOUT
        </Link>
        <Link to="/about" className="cart-item">
          CONTACT
        </Link>
        <CartIcon />
      </div>
    </div>
    {hidden ? null : <CartModal />}
  </div>
);

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);
