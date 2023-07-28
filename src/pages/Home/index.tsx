import React from "react";

import { Search, SneakerBlock } from "../../components";
import { useAppDispatch } from "../../redux/store";
import { selectSneakers } from "../../redux/slices/sneakers/selectors";
import { useSelector } from "react-redux";
import { fetchSneakers } from "../../redux/slices/sneakers/slice";
import { SneakerItem } from "../../redux/slices/sneakers/types";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakers);

  React.useEffect(() => {
    dispatch(fetchSneakers());
    window.scrollTo(0, 0);
  }, []);

  const sneakers = items.map((sneaker: SneakerItem, index: number) => (
    <SneakerBlock key={index} {...sneaker} />
  ));

  return (
    <div className="container">
      <div className="home_header">
        <h1>Все кроссовки</h1>
        <Search />
      </div>
      <div className="grid_wrapper">
        {status === "loading" ? <h1>ЗАГРУЗКА...</h1> : sneakers}
      </div>
    </div>
  );
};
