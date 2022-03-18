import React from "react";

import "./cart-item.scss";

export const CartItem = ({ image, price, key, id, title }) => {
  return (
    <div className="cart-items">
      <div className="cart-item">
        <img width={100} height={100} src={image} alt="logo" />
        <div>
          <p>{title}</p>
          <b>
            {price} руб
            {/* {obj.id} */}
          </b>
        </div>
      </div>
      <img
        className="card-close"
        // onClick={() => onRemove(obj.id)}
        width={50}
        height={50}
        src="/img/X.ico"
        alt="Remove"
      />
    </div>
  );
};
