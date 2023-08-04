import React from "react";
import { useSelector } from "react-redux";

import go_back_icon from "../../assets/img/go_back_icon.svg";
import { useNavigate } from "react-router-dom";
import { OrderItem } from "../../components";
import { selectOrders } from "../../redux/slices/orders/selectors";

export const Account: React.FC = () => {
  const navigate = useNavigate();
  const items = useSelector(selectOrders);

  return (
    <div className="container">
      {true ? (
        <>
          <div className="home_header home_header__account">
            <div onClick={() => navigate(-1)} className="bttn_back_page">
              <img src={go_back_icon} />
            </div>
            <h1>Мои покупки</h1>
          </div>
          <div className="grid_wrapper__account">
            {items.map((item, index) => (
              <OrderItem key={index} {...item} />
            ))}
          </div>
        </>
      ) : (
        <div className="container__empty">
          <div>
            <h2>У вас нет заказов</h2>
            <span>Оформите хотя бы один заказ.</span>
            <button
              onClick={() => navigate(-1)}
              className="container__empty__bttn"
            >
              &#8592; Вернуться обратно
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
