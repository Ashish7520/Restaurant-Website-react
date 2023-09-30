import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const mergedArray = [];

  cartCtx.items.forEach((item) => {
    const quantity = parseInt(item.quantity, 10); // Convert quantity to a number

    const existingItem = mergedArray.find(
      (existing) => existing.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      mergedArray.push({ ...item, quantity });
    }
  });

  let totalAmount = 0;
  mergedArray.map((item) => {
    totalAmount += item.price * item.quantity;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {mergedArray.map((item) => (
        <li className={classes.liClass} key={item.name}>
          Name:{item.name} Price:${item.price} - Quantity:{item.quantity}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
