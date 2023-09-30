import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderClassButton = (props) => {
  const CartCtx = useContext(CartContext);
  let quantity = 0;

  CartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderClassButton;
