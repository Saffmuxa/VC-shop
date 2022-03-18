import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";
// в редьюсере
import { useSelector } from "react-redux";

import "./h-item.scss";

export const HItem = ({ hardItem }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemCart = items.some((item) => item.id === hardItem.id);
  // some дает тру или фолс

  const btnClick = (e) => {
    // e.stopPropagation();

    if (isItemCart) {
      dispatch(deleteItemFromCart(hardItem.id));
    } else {
      dispatch(setItemInCart(hardItem));
    }
  };
  return (
    <div className="card">
      <div className="imgs-card">
        <img
          width={25}
          height={25}
          src="/img/like.svg"
          alt="unliked"
          className="check"
          //   onClick={favClick}
        />
        <img className="main-img-card" src={hardItem.imageUrl} alt="logo" />
        <p>{hardItem.title}</p>
      </div>
      <div className="content-price-button">
        <div className="content-price">
          {/* <span>id={item.id}</span> */}
          <span>Цена: </span>
          <b>
            {hardItem.price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")}
            руб
          </b>
        </div>

        <div onClick={btnClick} className="btn">
          {/* className={isItemAdded(id) ? cardModule.btn : cardModule.btnB} */}
          {isItemCart ? (
            <img
              onClick={btnClick}
              className="added"
              width={40}
              height={40}
              src="/img/added.svg"
              alt="added"
            />
          ) : (
            <img
              className="add"
              width={40}
              height={40}
              src="/img/add.svg"
              alt="add"
            />
          )}
        </div>
      </div>
    </div>
  );
};
