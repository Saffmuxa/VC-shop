import { Link } from "react-router-dom";
import { CartBlock } from "../drawer";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";

import { CartMenu } from "../cart-menu/cart-menu";

import "./header.scss";

export const Header = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  // const ItemsCounterCart = ({
  //   quantity=0
  // }) => {return quantity >0 ? ()}
  const [isCart, setCartOpened] = useState(false);
  const closeOpenCart = () => {
    setCartOpened(!isCart);
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="headerLeft">
          <Link to="/">
            <img width={90} height={90} src="/img/VC.svg" alt="logo" />
          </Link>
          <div className="headerInfo">
            <h3>React Hards</h3>
            <p>Магазин лучших железяк</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="cart-price" onClick={closeOpenCart}>
            <div>
              <b>
                {totalPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}
                руб.
              </b>
            </div>
            <div className="cartandcounter">
              {items.length > 0 ? (
                <div className="cart-counter">{items.length}</div>
              ) : (
                ""
              )}
              <img width={35} height={35} src="/img/cart.svg" alt="cart" />
            </div>
          </li>
          {isCart ? (
            <CartMenu items={items} closeOpenCart={closeOpenCart} />
          ) : (
            ""
          )}
          <li>
            <Link to="/check">
              <img
                className="favorite"
                width={35}
                height={35}
                src="/img/check.svg"
                alt="check"
              />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img width={35} height={35} src="/img/profile.svg" alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
