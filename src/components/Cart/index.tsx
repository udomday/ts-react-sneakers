import React from "react";
import { CartItem } from "../CartItem";
import { selectAll } from "../../redux/slices/cart/selectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { openCloseCart, removeAllItem } from "../../redux/slices/cart/slice";

import red_close_icon from "../../assets/img/red_close_icon.svg";
import empty_cart_icon from "../../assets/img/empty_cart_icon.svg";
import { OrderStatus, OrderType } from "../../redux/slices/orders/types";
import { createOrder } from "../../redux/slices/orders/slice";

type OutsideClick = MouseEvent & {
  composedPath: () => [] & {
    includes: (item: HTMLDivElement) => [];
  };
};

export const Cart: React.FC = () => {
  const cartRef = React.useRef(null);
  const { isOpen, items, totalPrice } = useSelector(selectAll);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as OutsideClick;
      if (cartRef.current && _event.composedPath().includes(cartRef.current)) {
        dispatch(openCloseCart());
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const newOrder = () => {
    const date = new Date();
    const orderitem: OrderType = {
      sneakers: [...items],
      date: `${date.getDate()}.${
        date.getMonth() + 1 > 10
          ? date.getMonth() + 1
          : `0${date.getMonth() + 1}`
      }.${date.getFullYear()}`,
      status: OrderStatus.IN_PROCESS,
    };

    dispatch(createOrder(orderitem));
    dispatch(removeAllItem());
    dispatch(openCloseCart());
  };

  return (
    <div className={isOpen ? "cart_root" : "cart_root__hidden"}>
      <div ref={cartRef} className="cart_root__left"></div>
      <div className="cart_root__right">
        <div className="cart_header">
          <h2>Корзина</h2>
          <div
            onClick={() => dispatch(openCloseCart())}
            className="bttn_remove"
          >
            <img src={red_close_icon} alt="close" />
          </div>
        </div>
        {items.length ? (
          <>
            <div className="cart_body">
              {items.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
            </div>
            <div className="cart_bottom">
              <div className="cart_bottom__text">
                <span>Итого:</span>
                <b>{totalPrice} руб.</b>
              </div>
              <div className="cart_bottom__text">
                <span>Налог 5%:</span>
                <b>{(totalPrice * 5) / 100} руб.</b>
              </div>
              <button onClick={() => newOrder()} className="cart__bttn">
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <div className="cart_empty">
            <img src={empty_cart_icon} />
            <span>
              <h3>Корзина пустая</h3>
              Добавьте хотя бы одну пару
              <br />
              кроссовок, чтобы сделать заказ.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
