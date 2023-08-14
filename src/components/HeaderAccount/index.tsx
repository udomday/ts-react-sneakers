import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { exit } from "../../redux/slices/users/slice";

import go_back_icon from "../../assets/img/go_back_icon.svg";

export const HeaderAccount: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickExit = () => {
    dispatch(exit());
    navigate("/login");
  };

  return (
    <div className="home_header">
      <div className="home_header__account">
        <div onClick={() => navigate("/")} className="bttn_back_page">
          <img src={go_back_icon} />
        </div>
        <h1>Мои покупки</h1>
      </div>
      <button className="home_header__bttn" onClick={() => clickExit()}>
        Выйти
      </button>
    </div>
  );
};
