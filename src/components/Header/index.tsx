import React from 'react';

import header_logo from '../../assets/img/header_logo.svg';
import account_icon from '../../assets/img/account_icon.svg';
import cart_icon from '../../assets/img/cart_icon.svg';
import favorite_icon from '../../assets/img/favorite_icon.svg';
import { useAppDispatch } from '../../redux/store';
import { openCloseCart } from '../../redux/slices/cart/slice';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../redux/slices/cart/selectors';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo" onClick={() => navigate('/')}>
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
          <img src={account_icon}></img>
          <img onClick={() => navigate('/favorite')} src={favorite_icon}></img>
        </div>
      </div>
    </div>
  );
};
