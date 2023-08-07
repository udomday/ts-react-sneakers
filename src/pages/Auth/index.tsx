import React from "react";

export const Auth: React.FC = () => {
  return (
    <div className="container">
      <div className="auth">
        <h1>Авторизация</h1>
        <div>
          <input placeholder="Электронная почта" />
        </div>
        <div>
          <input placeholder="пароль" />
        </div>
        <button>Войти</button>
      </div>
    </div>
  );
};
