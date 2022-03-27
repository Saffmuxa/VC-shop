import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteItemFromCart } from "../../redux/cart/reducer";

import "./cart-item.scss";

export const CartItem = ({ addedItem }) => {
  // const items = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();

  const btnRemove = () => {
    dispatch(deleteItemFromCart(addedItem.id));
  };

  return (
    <div className="cart-items">
      <div className="cart-item">
        <img width={100} height={100} src={addedItem.imageUrl} alt="logo" />
        <div>
          <p>{addedItem.title}</p>
          <b>
            {addedItem.price} руб
            {/* {obj.id} */}
          </b>
        </div>
      </div>
      <img
        className="card-close"
        onClick={btnRemove}
        width={30}
        // height={40}
        src="/img/X.ico"
        alt="Remove"
      />
    </div>
  );
};
