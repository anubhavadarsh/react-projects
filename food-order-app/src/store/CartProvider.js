import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedItem = state.items.concat(action.payload.item);
      const updatedTotalAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;

      return {
        items: updatedItem,
        totalAmount: updatedTotalAmount,
      };
    }

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatchCart({
      type: "ADD",
      payload: {
        item,
      },
    });
  };

  const removeItemFromCart = (id) => {};

  const ctx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
