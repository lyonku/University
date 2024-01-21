import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import "./Main.css";

import { useDispatch, useSelector } from "react-redux";
import { libraryGet, filterGet } from "features/library/librarySlice";
import { userGet, userEventsGet } from "features/user/userSlice";

import Loader from "components/common/Loader";
import ArrowImg from "components/common/Images/arrow-img";
import MainNavBar from "./components/Main-navbar";
import MainProfile from "./components/Main-profile";

const Main = ({}) => {
  const width = window.innerWidth;
  const [openNavbar, setOpenNavbar] = useState(width < 1300 ? false : true);
  const { userData, userGetStatus } = useSelector((state) => state.user);
  const { currentBook } = useSelector((state) => state.library);
  const dispatch = useDispatch();

  const locationSelect = useLocation();
  const parts = locationSelect.pathname.split("/");
  let location = [""];
  let hash = "";

  useEffect(() => {
    dispatch(userGet());
    dispatch(userEventsGet());
    dispatch(libraryGet());
    dispatch(filterGet());
  }, []);

  switch (parts[1]) {
    case "Shedule":
      location = ["Мое расписание"];
      break;
    case "Library":
      location = ["Библиотека"];
      if (parts[2]) {
        location.push(currentBook.ShortDesc);
      }
      break;
    case "Profile":
      location = ["Профиль"];
      break;
    case "Settings":
      location = ["Настройка"];
      break;
    default:
      break;
  }
  while (userGetStatus == "loading" || userGetStatus == "") {
    return <Loader />;
  }

  return (
    <div className="Main">
      <div className="Main__wrap">
        <MainNavBar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <div className="Main__body">
          <div className="Main__header">
            <div className="addressRow">
              <img src="/images/navigation-logo.svg" />
              <Link to={"/"} className="addressRow-main addressRow-text">
                Главная
              </Link>
              {location.map((item, index) => {
                return (
                  <div className="addressRow-item" key={index}>
                    <div className="addressRow-delimiter">
                      <ArrowImg />
                    </div>
                    <Link
                      to={`/${
                        index == 2 ? parts[1] + "/" + parts[2] : parts[1]
                      }`}
                      className="addressRow-sub addressRow-text"
                    >
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>
            <MainProfile user={userData} userGetStatus={userGetStatus} />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
