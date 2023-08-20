import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";

import email_icon from "../../assets/img/email_icon.svg";
import password_icon from "../../assets/img/password_icon.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/users/selectors";
import { useAppDispatch } from "../../redux/store";
import { login, registration } from "../../redux/slices/users/slice";
import { Status } from "../../redux/slices/sneakers/types";

export const Auth: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === `/${LOGIN_ROUTE}`;
  const errEmailRef = React.useRef<HTMLParagraphElement>(null);
  const [mail, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [correctEmail, setCorrectEmail] = React.useState<boolean>(false);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnChange = (mail: string) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(mail);
    if (re.test(mail)) {
      if (errEmailRef.current) {
        setCorrectEmail(true);
        errEmailRef.current.innerHTML = "";
      }
    } else {
      if (errEmailRef.current) {
        setCorrectEmail(false);
        errEmailRef.current.innerHTML = "Неправильная почта";
      }
    }
  };

  const bttnAuth = () => {
    try {
      if (password && mail && correctEmail) {
        const authdata = { mail, password };
        if (isLogin) {
          dispatch(login(authdata)).then((data: any) => {
            const error = data.type.split("/");
            if (error[1] === "rejected") {
              alert("Неправильная почта или пароль");
            } else {
              navigate("/account/");
            }
          });
        } else {
          dispatch(registration(authdata)).then((data: any) => {
            const error = data.type.split("/");
            if (error[1] === "rejected") {
              alert("Аккаунт с такой почтой уже существует");
            } else {
              navigate("/account/");
            }
          });
        }
      } else {
        alert("Необходимо правильно заполнить все поля");
      }
    } catch (e) {
      //@ts-ignore
      alert(e.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
        <div className="img_input">
          <input
            value={mail}
            type="email"
            onChange={(e) => handleOnChange(e.target.value)}
            placeholder="Электронная почта"
          />
          <p ref={errEmailRef}></p>
          <img src={email_icon} alt="email_icon" />
        </div>
        <div className="img_input">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
          />
          <img src={password_icon} alt="email_icon" />
        </div>
        <p>
          {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}{" "}
          <Link to={isLogin ? "/registration" : "/login"}>
            {isLogin ? "Зарегестрируйтесь!" : "Войдите!"}
          </Link>
        </p>
        <button onClick={bttnAuth}>
          {isLogin ? "Войти" : "Зарегестрироваться"}
        </button>
      </div>
    </div>
  );
};
