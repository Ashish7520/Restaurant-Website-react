import { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        prevItems.push({ ...item, quantity: 1 });
      }

      return [...prevItems];
    });
  };

  const removeItemHandler = (itemName) => {
    console.log(itemName);
    updateItems((prevItems) => {
      console.log(prevItems);
      const updatedItems = prevItems
        .map((item) => {
          if (item.name === itemName) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return updatedItems;
    });
  };

  const cartContent = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
