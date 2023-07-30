import React from 'react';
import { SneakerItem } from '../../redux/slices/sneakers/types';

import plus_icon from '../../assets/img/plus_icon.svg';
import checked_icon from '../../assets/img/checked_icon.svg';
import liked_icon from '../../assets/img/liked_icon.svg';
import unliked_icon from '../../assets/img/unliked_icon.svg';

import styles from './SneakerBlock.module.scss';
import { selectCartItemById } from '../../redux/slices/cart/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { addItem, removeItem } from '../../redux/slices/cart/slice';
import { CartItemType } from '../../redux/slices/cart/types';
import { selectFavItemById } from '../../redux/slices/sneakers/selectors';
import { addOrRemoveFavorite } from '../../redux/slices/sneakers/slice';

export const SneakerBlock: React.FC<SneakerItem> = (props) => {
  const { id, imgURL, price, title } = props;

  const dispatch = useAppDispatch();
  const inCart = useSelector(selectCartItemById(id));
  const inFavList = useSelector(selectFavItemById(id));

  const pushItemOnCart = () => {
    const cartItem: CartItemType = { ...props, count: 0 };
    dispatch(addItem(cartItem));
  };

  return (
    <div className={styles.card}>
      <div onClick={() => dispatch(addOrRemoveFavorite(props))} className={styles.favorite}>
        {inFavList ? (
          <img src={liked_icon} alt="Liked" />
        ) : (
          <img src={unliked_icon} alt="Unliked" />
        )}
      </div>
      <img width="100%" height={135} src={imgURL} />
      <h5>{title}</h5>
      <div className={styles.card__bottom}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        {inCart ? (
          <img onClick={() => dispatch(removeItem(id))} src={checked_icon} alt="check" />
        ) : (
          <div onClick={() => pushItemOnCart()} className={styles.plus}>
            <img src={plus_icon} alt="Plus" />
          </div>
        )}
      </div>
    </div>
  );
};
