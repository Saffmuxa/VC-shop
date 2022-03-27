import React from "react";
import { calcTotalPrice } from "../utils";
import { CartItem } from "../cart-item/cart-item";
// import { closeOpenCart } from "../cart-block/cart-block";

// import { useSelector } from "react-redux";

import "./cart-menu.scss";

export const CartMenu = ({ items, buyClick, closeOpenCart }) => {
  return (
    <div className="overlay">
      <div onClick={closeOpenCart} className="black"></div>
      <div className="drawer">
        {/* <div className="name-close"> */}
        <div className="name-close">
          {/* <div> */}
          <h2>Корзина</h2>
          {/* </div> */}
          <img
            onClick={closeOpenCart}
            className="x"
            width={50}
            height={50}
            src="./img/close.ico"
            alt="close"
          />
        </div>
        {/* </div> */}
        <div className="hardItemsInCart">
          {items.length > 0 ? (
            <>
              <div className="cart-wrap">
                {items.map((addedItem) => (
                  <CartItem
                    addedItem={addedItem}
                    // id={addedItem.id}
                    key={addedItem.id}
                  />
                ))}
              </div>
              {/* <div className="cart-wrap">
                {items.map((addedItem) => (
                  <CartItem
                    image={addedItem.imageUrl}
                    price={addedItem.price}
                    title={addedItem.title}
                    // id={addedItem.id}
                    key={addedItem.id}
                  />
                ))}
              </div> */}
              <div className="buy-section">
                <ul className="cartTotal">
                  <li>
                    <span>Итого:</span>
                    <b className="value">{calcTotalPrice(items)} руб.</b>
                  </li>
                  <li>
                    <span>Налог 20%:</span>
                    <b className="value">
                      {Math.floor(calcTotalPrice(items) * 1.2 * 100) / 100}
                      руб.
                    </b>
                  </li>
                </ul>
                <button className="buy" onClick={buyClick}>
                  Оформить заказ
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="empty-cart">
                <img
                  width={200}
                  height={200}
                  src="./img/empty.png"
                  alt="empty"
                />
                <span>Упс, корзина пуста!</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
