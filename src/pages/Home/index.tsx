import React from "react";

import { Search, Skeleton, SneakerBlock } from "../../components";
import { useAppDispatch } from "../../redux/store";
import { selectSneakers } from "../../redux/slices/sneakers/selectors";
import { useSelector } from "react-redux";
import { fetchSneakers } from "../../redux/slices/sneakers/slice";
import { SneakerItem } from "../../redux/slices/sneakers/types";

export const Home: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectSneakers);

  React.useEffect(() => {
    dispatch(fetchSneakers());
    window.scrollTo(0, 0);
  }, []);

  const sneakers = items.map((sneaker: SneakerItem, index: number) => (
    <SneakerBlock key={index} {...sneaker} />
  ));

  const sneakersSkeleton = [...new Array(8)].map((_, index: number) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="home_header">
        <h1>Все кроссовки</h1>
        <Search />
      </div>
      <div className="grid_wrapper">
        {status === "loading" ? sneakersSkeleton : sneakers}
      </div>
    </div>
  );
});
