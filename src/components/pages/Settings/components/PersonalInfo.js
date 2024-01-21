import React, { useState, useEffect, useRef } from "react";

const PersonalInfo = ({ user }) => {
  return (
    <div className="PersonalInfo">
      <div className="PersonalInfo__title">Личная информация</div>
      <div className="PersonalInfo__items">
        <div className="PersonalInfo__item itemInput">
          <input
            type="text"
            id="name"
            name=""
            className="LoginInput__name"
            required="required"
            defaultValue={user.first_name}
          />
          <span className="LoginInput__loginText">Имя</span>
        </div>
        <div className="PersonalInfo__item itemInput">
          <input
            type="text"
            id="surname"
            name=""
            className="LoginInput__surname"
            required="required"
            defaultValue={user.last_name}
          />
          <span className="LoginInput__loginText">Фамилия</span>
        </div>
        <div className="PersonalInfo__item itemInput">
          <input
            type="text"
            id="email"
            name=""
            className="LoginInput__email"
            required="required"
            defaultValue={user.email}
          />
          <span className="LoginInput__loginText">Эл.почта</span>
        </div>
        <div className="PersonalInfo__item itemInput">
          <input
            type="text"
            id="phone"
            name=""
            className="LoginInput__phone"
            required="required"
            defaultValue={user.phone}
          />
          <span className="LoginInput__loginText">Телефон</span>
        </div>
      </div>

      <div className="PersonalInfo__checkboxs">
        <div className="PersonalInfo__item">
          <input
            type="checkbox"
            id="emailCheck"
            name="emailCheck"
            className="LoginInput__emailCheck LoginInput__checkbox"
            required="required"
          />
          <label htmlFor="emailCheck">Получать уведомления по эл.почте</label>
        </div>
        <div className="PersonalInfo__item">
          <input
            type="checkbox"
            id="smsCheck"
            name="smsCheck"
            className="LoginInput__smsCheck LoginInput__checkbox"
            required="required"
          />
          <label htmlFor="smsCheck">Получать уведомления по sms</label>
        </div>
      </div>

      <div className="PersonalInfo__btn blueBtn">Сохранить</div>
    </div>
  );
};

export default PersonalInfo;
