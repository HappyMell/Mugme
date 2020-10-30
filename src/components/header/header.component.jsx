import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="header__container">
      <div className="nav-menu">
        <div className="menu-item-wrapper">
          <Link className="menu-item" to="/category/graphic">
            GRAPHIC
          </Link>
          <Link className="menu-item" to="/emoticon">
            EMOTICON
          </Link>
          <Link className="main-link" to="/special-product">
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
        <div className="cart">
          <div className="cart__button">
            <Cart className="cart-icon" />
            <div className="cart-quantity">3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
