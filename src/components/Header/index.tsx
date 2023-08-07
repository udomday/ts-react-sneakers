import React from "react";

import header_logo from "../../assets/img/header_logo.svg";
import account_icon from "../../assets/img/account_icon.svg";
import cart_icon from "../../assets/img/cart_icon.svg";
import favorite_icon from "../../assets/img/favorite_icon.svg";
import { useAppDispatch } from "../../redux/store";
import { openCloseCart } from "../../redux/slices/cart/slice";
import { useSelector } from "react-redux";
import { selectAll } from "../../redux/slices/cart/selectors";
import { useNavigate } from "react-router-dom";
import { selectFavorites } from "../../redux/slices/sneakers/selectors";
import { selectOrders } from "../../redux/slices/orders/selectors";
import { selectUser } from "../../redux/slices/users/selectors";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useSelector(selectAll);
  const { id, isAuth } = useSelector(selectUser);
  const favorites = useSelector(selectFavorites);
  const orders = useSelector(selectOrders);
  const navigate = useNavigate();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(favorites);
      localStorage.setItem("favorite", json);
    }
    isMounted.current = true;
  }, [favorites]);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(orders);
      localStorage.setItem("orders", json);
    }
    isMounted.current = true;
  }, [orders]);

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo" onClick={() => navigate("/")}>
          <img src={header_logo}></img>
          <div>
            <h3>REACT SNEAKERS</h3>
            <h5>Магазин лучших кроссовок</h5>
          </div>
        </div>
        <div className="header__main">
          <div className="cart">
            <img onClick={() => dispatch(openCloseCart())} src={cart_icon} />
            <span>{totalPrice} руб.</span>
          </div>
          <img
            onClick={() => navigate(isAuth ? `/account/${id}` : `/login`)}
            src={account_icon}
          ></img>
          <img
            onClick={() => navigate(isAuth ? `/favorite/${id}` : `/login`)}
            src={favorite_icon}
          ></img>
        </div>
      </div>
    </div>
  );
};
