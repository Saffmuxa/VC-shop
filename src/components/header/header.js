import { Link } from "react-router-dom";
import { Carousel } from "./carouselBox";

import React from "react";

import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";

import "./header.scss";

export const Header = ({ closeOpenCart }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  // const ItemsCounterCart = ({
  //   quantity=0
  // }) => {return quantity >0 ? ()}
  // const [isCart, setCartOpened] = useState(false);
  // const closeOpenCart = () => {
  //   setCartOpened(!isCart);
  //   console.log(isCart);
  // };
  return (
    <div className="header">
      <div className="header-content">
        {/* <div className="header-left"> */}
        <Link to="/" className="header-left">
          <img width={90} height={90} src="./img/VC.svg" alt="logo" />
          <div className="header-info">
            <h3>React Hards</h3>
            <p>Магазин лучших железяк</p>
          </div>
        </Link>
        {/* </div> */}
        <div className="carousel">
          <Carousel>
            <Link to="/#">
              <div className="slider-card">
                <img
                  className="slider-card_img"
                  src="./img/vcard.png"
                  alt="vcard"
                />
                <img
                  className="sale"
                  height={60}
                  src="./img/70s.svg"
                  alt="sale"
                />
              </div>
            </Link>
            <Link to="/#">
              <div className="slider-cpu">
                <img className="slider-cpu_img" src="./img/cpu.png" alt="cpu" />
                <img
                  className="sale"
                  height={60}
                  src="./img/50ss.svg"
                  alt="sale"
                />
              </div>
            </Link>
            <Link to="/#">
              <div className="slider-mem">
                <img className="slider-mem_img" src="./img/mem.png" alt="cpu" />
                <img
                  className="sale"
                  height={60}
                  src="./img/50s.svg"
                  alt="sale"
                />
              </div>
            </Link>
          </Carousel>
        </div>

        <ul className="header-right">
          <li
            className="cart-price"
            // onChange={closeOpenCart}
            onClick={closeOpenCart}
          >
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
              <img width={35} height={35} src="./img/cart.svg" alt="cart" />
            </div>
          </li>
          {/* {isCart ? (
            <CartMenu items={items} closeOpenCart={closeOpenCart} />
          ) : (
            ""
          )} */}
          <li>
            <Link to="/check">
              <img
                className="favorite"
                width={35}
                height={35}
                src="./img/check.svg"
                alt="check"
              />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img width={35} height={35} src="./img/profile.svg" alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
