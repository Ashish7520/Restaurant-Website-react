import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const mergedArray = [];

  cartCtx.items.forEach((item) => {
    const quantity = parseInt(item.quantity, 10);
    const existingItem = mergedArray.find(
      (existing) => existing.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      mergedArray.push({ ...item, quantity });
    }
  });

  const addCartHandler = (itemName) => {
    cartCtx.addItem({
      ...cartCtx.items.find((item) => item.name === itemName),
    });
  };

  const removeCartHandler = (itemName) => {
    cartCtx.removeItem(itemName);
  };

  let totalAmount = 0;
  mergedArray.map((item) => {
    totalAmount += item.price * item.quantity;
  });
  totalAmount = totalAmount.toFixed(2);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {mergedArray.map((item) => (
        <li className={classes.liClass} key={item.name}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x{item.quantity}</span>
            </div>
          </div>
          <button onClick={() => removeCartHandler(item.name)}>-</button>
          <button onClick={() => addCartHandler(item.name)}>+</button>
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
