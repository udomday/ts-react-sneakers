import React from "react";
import { SneakerItem } from "../../redux/slices/sneakers/types";

import plus_icon from "../../assets/img/plus_icon.svg";
import checked_icon from "../../assets/img/checked_icon.svg";
import liked_icon from "../../assets/img/liked_icon.svg";
import unliked_icon from "../../assets/img/unliked_icon.svg";

import styles from "./SneakerBlock.module.scss";

export const SneakerBlock: React.FC<SneakerItem> = (props) => {
  const { imgURL, price, title } = props;
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={unliked_icon} alt="Unliked" />
      </div>
      <img width="100%" height={135} src={imgURL} />
      <h5>{title}</h5>
      <div className={styles.card__bottom}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} src={plus_icon} alt="Plus" />
      </div>
    </div>
  );
};
