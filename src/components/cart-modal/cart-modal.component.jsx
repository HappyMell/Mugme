import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ExitButton } from "../../assets/exit-button.svg";
import "./cart-modal.styles.scss";

const CartModal = ({ toggleCartHidden }) => {
  return (
    <div className="cart-modal">
      <div className="cart-container">
        <div className="cart-header">
          <Logo />
          <ExitButton className="exit-button" onClick={toggleCartHidden} />
        </div>
        <div className="cart-form-wrapper">
          <div className="default-state">
            <div className="cart-footer">
              <CustomButton>Continue to Checkout</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-items" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartModal);
