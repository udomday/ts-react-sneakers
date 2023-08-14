import React from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { OrderItem } from '../../components';
import { selectOrders, selectStatusOrders } from '../../redux/slices/orders/selectors';
import { useAppDispatch } from '../../redux/store';
import { HeaderAccount } from '../../components/HeaderAccount';
import { selectUserId } from '../../redux/slices/users/selectors';
import { fetchOrders } from '../../redux/slices/orders/slice';
import { Status } from '../../redux/slices/sneakers/types';

export const Account: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const items = useSelector(selectOrders);
  const status = useSelector(selectStatusOrders);
  const userId = useSelector(selectUserId);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (userId) {
      dispatch(fetchOrders(userId));
    }
  }, []);

  return (
    <>
      {status === Status.LOADING ? (
        <div className="container__empty">
          <h1>Загрузка...</h1>
        </div>
      ) : (
        <div className="container">
          {items.length ? (
            <>
              <HeaderAccount />
              <div className="grid_wrapper__account">
                {items.map((item, index) => (
                  <OrderItem key={index} {...item} />
                ))}
              </div>
            </>
          ) : (
            <div>
              <HeaderAccount />
              <div className="container__empty">
                <div>
                  <h2>У вас нет заказов</h2>
                  <span>Оформите хотя бы один заказ.</span>
                  <button onClick={() => navigate('/')} className="container__empty__bttn">
                    &#8592; Вернуться обратно
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
});
