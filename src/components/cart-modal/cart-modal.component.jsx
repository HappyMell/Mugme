import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ExitButton } from "../../assets/exit-button.svg";
import "./cart-modal.styles.scss";

const CartModal = ({ toggleCartHidden, cartItems }) => {
  return (
    <div className="cart-modal">
      <div className="cart-container">
        <div className="cart-header">
          <Logo />
          <ExitButton className="exit-button" onClick={toggleCartHidden} />
        </div>
        <div className="cart-form-wrapper">
          <div className="default-state">
            <div className="cart-list">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
            <div className="cart-footer">
              <CustomButton>Continue to Checkout</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
