import React from "react";

import styles from "./OrderItem.module.scss";
import { OrderType } from "../../redux/slices/orders/types";

export const OrderItem: React.FC<OrderType> = React.memo((props) => {
  const { sneakers, date, status } = props;

  const imgBlock = props.sneakers.filter((_, index) => index <= 3);

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
          <b>{props.date}</b>
        </div>
        <div>
          <span>Статус:</span>
          <b>{props.status}</b>
        </div>
      </div>
    </div>
  );
});
