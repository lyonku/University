import React, { useState, useEffect, useRef } from "react";
import { Routes, useLocation, Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "features/auth/authSlice";

import CloseImg from "components/common/Images/close-img";
import ArrowImg from "components/common/Images/arrow-img";

function MainProfile({ user, userGetStatus }) {
  const [menuOpen, setMenuOpen] = useState("close");

  const dispatch = useDispatch();
  const ref = useRef(null);

  let error = userGetStatus == "error";

  const handleMenu = () => {
    if (menuOpen == "open") {
      setMenuOpen("open closing");
      setTimeout(() => setMenuOpen("close"), 900);
      return;
    }
    setMenuOpen(menuOpen == "close" ? "open" : "close");
  };

  useClickAway(ref, () => {
    menuOpen == "open" && handleMenu();
  });

  return (
    <div className={`Main__profile ${menuOpen}`} ref={ref}>
      <div className="Main__profileHeader">
        <div className="Main__profileIcon">
          {!error ? user?.first_name[0] + user?.last_name[0] : ""}
        </div>
        <div className="Main__profileName">
          {!error ? `${user?.first_name} ${user?.last_name[0]}.` : ""}
        </div>
        <div className="Main__profileBtn" onClick={handleMenu}>
          {menuOpen == "open" ? <CloseImg /> : <ArrowImg color={"#0D4CD3"} />}
        </div>
      </div>

      <div className="Main__profileMenu">
        <Link
          to={!error && "/Profile"}
          className="Main__profileLink"
          onClick={handleMenu}
        >
          <img src={"/images/profile-logo.svg"} />
          <div className="Main__profileLink-Text">Профиль</div>
          {error && (
            <div className="Main__profileMenuError">
              Раздел временно недоступен
            </div>
          )}
        </Link>
        <Link to="/Settings" className="Main__profileLink" onClick={handleMenu}>
          <img src={"/images/profile-settings.svg"} />
          <div className="Main__profileLink-Text">Настройка</div>
        </Link>
        <div className="Main__profileLink" onClick={() => dispatch(logout())}>
          <img src={"/images/profile-logout.svg"} />
          <div className="Main__profileLink-Text">Выход</div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
