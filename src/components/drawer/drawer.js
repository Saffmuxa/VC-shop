// import React, { useState } from "react";

// import { useSelector } from "react-redux";
// import { calcTotalPrice } from "../utils";

// import { CartMenu } from "../cart-menu/cart-menu";

import "./drawer.scss";

export const Drawer = () => {
  // const items = useSelector((state) => state.cart.itemsInCart);
  // const totalPrice = calcTotalPrice(items);

  // const [isCart, setCartOpened] = useState(false);
  // const closeOpenCart = () => {
  //   setCartOpened(!isCart);
  // };
  return (
    <>
      {/* <li className="cart-price" onClick={closeOpenCart}>
        <div>
          <b>
            {totalPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}
            руб.
          </b>
        </div>
        <img width={35} height={35} src="/img/cart.svg" alt="cart" />
      </li>
      {isCart ? <CartMenu items={items} closeOpenCart={closeOpenCart} /> : ""} */}
      {/* Передаем итемы  и функцию в картМеню */}
    </>
  );
};
