import React from "react";

import header_logo from "../../assets/img/header_logo.svg";
import account_icon from "../../assets/img/account_icon.svg";
import cart_icon from "../../assets/img/cart_icon.svg";
import favorite_icon from "../../assets/img/favorite_icon.svg";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={header_logo}></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <h5>Магазин лучших кроссовок</h5>
          </div>
        </div>
        <div className="header__main">
          <div className="cart">
            <img src={cart_icon} />
            <span>1205 руб.</span>
          </div>
          <img src={account_icon}></img>
          <img src={favorite_icon}></img>
        </div>
      </div>
    </div>
  );
};
