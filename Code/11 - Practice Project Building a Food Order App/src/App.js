import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

//*  React Hook "useState":
// - [cannot be called at the top level]: React Hooks must be called in a React function component or a custom React Hook function.
// - [cannot be called inside a callback]: React Hooks must be called in a React function component or a custom React Hook function
// - [is called conditionally [if(true){...}, ...]]: React Hooks must be called in the exact same order in every component render

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // <Fragment>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    // </Fragment>
  );
}

export default App;
