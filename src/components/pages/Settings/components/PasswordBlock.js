import React, { useState, useEffect, useRef } from "react";

const PasswordBlock = ({ user }) => {
  return (
    <div className="PasswordBlock">
      <div className="PasswordBlock__wrap">
        <div className="PasswordBlock__title">Пароль</div>
        <div className="PasswordBlock__inputs">
          <div className="PasswordBlock__input itemInput">
            <input
              type="password"
              id="password"
              name=""
              className="LoginInput__surname"
              required="required"
            />
            <span className="LoginInput__loginText">Старый пароль</span>
          </div>
          <div className="PasswordBlock__input itemInput">
            <input
              type="password"
              id="newPassword"
              name=""
              className="LoginInput__surname"
              required="required"
            />
            <span className="LoginInput__loginText">Новый пароль</span>
          </div>
          <div className="PasswordBlock__input itemInput">
            <input
              type="password"
              id="repeatPassword"
              name=""
              className="LoginInput__surname"
              required="required"
            />
            <span className="LoginInput__loginText">Новый пароль еще раз</span>
          </div>
        </div>
        <div className="PasswordBlock__btn blueBtn">Сохранить</div>
      </div>
    </div>
  );
};

export default PasswordBlock;
