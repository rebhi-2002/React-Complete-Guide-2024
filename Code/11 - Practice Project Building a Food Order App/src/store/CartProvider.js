import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      // let updatedItem;
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItem = { ...action.item };
      // updatedItems = state.items.contact(updatedItem);
      updatedItems = state.items.concat(action.item);
    }

    // const updatedItems = state.items.concat(action.item); // push()

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // if (action.type === "REMOVE") {
  //   const updatedItems = state.items.reduce((updatedItems, item) => {
  //     if (item.id === action.id) {
  //       const updatedAmount = item.amount - 1;
  //       if (updatedAmount > 0) {
  //         updatedItems.push({ ...item, amount: updatedAmount });
  //       }
  //     } else {
  //       updatedItems.push(item);
  //     }
  //     return updatedItems;
  //   }, []);

  //   const updatedTotalAmount = updatedItems.reduce(
  //     (total, item) => total + item.price * item.amount,
  //     0
  //   );
  //   return {
  //     items: updatedItems,
  //     totalAmount: updatedTotalAmount,
  //   };
  // }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  // **state**: The state snapshot used in the component re-render/ re-evaluation cycle
  // **dispatchFn**: A function that can be used to dispatch a new action (i.e. trigger an update of the state)
  // **reducerFn**: (prevState, action) => newState A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state.
  // **initialState**: The initial state
  // **initFn**: A function to set the initial state programmatically

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD", // type: "ADD_CART_ITEM", // identifier: "",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items, // items: [],
    totalAmount: cartState.totalAmount, // totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
