import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    // cartCtx.addItem(item);
    cartCtx.addItem({ ...item, amount: 1 }); // addItem: addItemToCartHandler, => [\src\store\CartProvider.js]
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })} */}

      {cartCtx.items.map((item) => {
        // return <li>{item.name}</li>;
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span className={classes.total}>Total Amount</span>
        {/* <span>35.62</span> */}
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={() => {
              console.log("Ordering...");
            }}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
