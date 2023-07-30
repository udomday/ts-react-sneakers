import React from 'react';
import { useSelector } from 'react-redux';
import { selectSneakers } from '../../redux/slices/sneakers/selectors';
import { SneakerItem } from '../../redux/slices/sneakers/types';
import { SneakerBlock } from '../../components';

import go_back_icon from '../../assets/img/go_back_icon.svg';
import { useNavigate } from 'react-router-dom';

export const Favorite: React.FC = () => {
  const { favorites } = useSelector(selectSneakers);
  const navigate = useNavigate();
  return (
    <div className="container">
      {favorites.length ? (
        <>
          <div className="home_header home_header__favorite">
            <div onClick={() => navigate(-1)} className="bttn_back_page">
              <img src={go_back_icon} />
            </div>
            <h1>Мои закладки</h1>
          </div>
          <div className="grid_wrapper">
            {favorites.map((favorite: SneakerItem, index: number) => (
              <SneakerBlock key={index} {...favorite} />
            ))}
          </div>
        </>
      ) : (
        <div className="container__empty">
          <div>
            <h2>Закладок нет :(</h2>
            <span>Вы ничего не добавляли в закладки</span>
          </div>
        </div>
      )}
    </div>
  );
};
