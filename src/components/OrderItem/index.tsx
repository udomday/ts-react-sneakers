import React from "react";

import styles from "./OrderItem.module.scss";
import { OrderType } from "../../redux/slices/orders/types";

export const OrderItem: React.FC<OrderType> = (props) => {
  const { sneakers, date, status } = props;

  const imgBlock = sneakers.filter((_, index) => index <= 3);

  return (
    <div className={styles.root}>
      <div className={styles.root__image}>
        {imgBlock.map((sneaker) => (
          <div>
            <img src={sneaker.imgurl} />
          </div>
        ))}
      </div>
      <div className={styles.root__info}>
        <div>
          <span>Дата заявки:</span>
          <b>{date}</b>
        </div>
        <div>
          <span>Статус:</span>
          <b>{status}</b>
        </div>
      </div>
    </div>
  );
};
