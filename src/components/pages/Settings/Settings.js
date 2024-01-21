import React, { useState, useEffect, useRef } from "react";
import "./Settings.css";
import PasswordBlock from "./components/PasswordBlock";
import PersonalInfo from "./components/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const { userData, userGetStatus } = useSelector((state) => state.user);

  return (
    <div className="Settings">
      <div className="Settings__wrap">
        <div className="Settings__info">
          <div className="Settings__title title">Настройки</div>
          <PersonalInfo user={userData} />
          <PasswordBlock />
        </div>
      </div>
    </div>
  );
};

export default Settings;
