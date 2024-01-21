import React, { useState, useEffect, useRef } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({}) => {
  const { userData, userGetStatus } = useSelector((state) => state.user);

  return (
    <div className="Profile">
      <div className="Profile__wrap">
        {userGetStatus == "error" ? (
          <div className="error__message">
            Раздел временно недоступен, попробуйте зайти позднее
          </div>
        ) : (
          <div className="Profile__info">
            <div className="Profile__avatar">
              <img src="/images/profile-avatar.png" />
            </div>
            <div className="Profile__name title">{`${userData.first_name} ${userData.last_name}`}</div>
            <div className="studyInfo">
              <div className="studyInfo__item">{`${userData.course} курс`}</div>
              <div className="studyInfo__item">{`Группа ${userData.learning_group}`}</div>
              <div className="studyInfo__item">{userData.faculty}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
