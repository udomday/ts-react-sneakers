import React from 'react';

import styles from './CartItem.module.scss';

import plus_icon from '../../assets/img/plus_icon.svg';
import { CartItemType } from '../../redux/slices/cart/types';
import { useAppDispatch } from '../../redux/store';
import { removeItem } from '../../redux/slices/cart/slice';

export const CartItem: React.FC<CartItemType> = (props) => {
  const { id, title, price, imgURL, count } = props;
  const dispatch = useAppDispatch();
  return (
    <div className={styles.root}>
      <div className={styles.root__logo} style={{ backgroundImage: `url(${imgURL})` }}></div>
      <div className={styles.root_body}>
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <div onClick={() => dispatch(removeItem(id))} className={styles.root__bttn_remove}>
        <img src={plus_icon} alt="remove" />
      </div>
    </div>
  );
};
