import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LibraryIcon from "components/common/Images/library-icon";
import RecordBookIcon from "components/common/Images/recordBook-icon";
import ScheduleIcon from "components/common/Images/schedule-icon";
import ArrowImg from "components/common/Images/arrow-img";

const MainNavBar = ({ openNavbar, setOpenNavbar }) => {
  const location = useLocation().pathname;

  const handleNavbarClick = () => {
    setOpenNavbar((prevOpenNavbar) => !prevOpenNavbar);
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1300) {
        setOpenNavbar(false);
      } else {
        setOpenNavbar(true);
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className={`Navbar ${openNavbar ? "open" : "close"}`}>
      <div className="Navbar__header" onClick={handleNavbarClick}>
        <div className="Navbar__title">
          <span className="Navbar__title_open">УНИВЕРСИТЕТ</span>

          <img src={"/images/university-plus-logo.svg"} />
        </div>
        <div className="Navbar__btn">
          <div className="Navbar__btn-img"></div>
        </div>
      </div>
      <div className="Navbar__body">
        <div className="Navbar__items">
          <Link
            to={"/Shedule"}
            className={`Navbar__item ${
              location == "/Shedule" && "Navbar__item_chosen"
            }`}
          >
            <div className="NavbarItem__titleWrap">
              <ScheduleIcon color={location == "/Shedule" && "#0b1f33"} />
              <div className="NavbarItem__title">
                <span>Расписание</span>
              </div>
            </div>

            <div className="NavbarItem__iconSelect">
              <ArrowImg color={location == "/Shedule" && "#0b1f33"} />
            </div>
          </Link>
          <div
            className={`Navbar__item ${
              location == "/Zachetka" && "Navbar__item_chosen"
            }`}
          >
            <div className="NavbarItem__titleWrap">
              <RecordBookIcon color={location == "/Zachetka" && "#0b1f33"} />
              <div className="NavbarItem__title">
                <span>Зачетка</span>
              </div>
            </div>

            <div className="NavbarItem__iconSelect">
              <ArrowImg color={location == "/Zachetka" && "#0b1f33"} />
            </div>
          </div>
          <Link
            to="/Library"
            className={`Navbar__item ${
              location == "/Library" && "Navbar__item_chosen"
            }`}
          >
            <div className="NavbarItem__titleWrap">
              <LibraryIcon color={location == "/Library" && "#0b1f33"} />
              <div className="NavbarItem__title">
                <span>Библиотека</span>
              </div>
            </div>

            <div className="NavbarItem__iconSelect">
              <ArrowImg color={location == "/Library" && "#0b1f33"} />
            </div>
          </Link>
        </div>
        <div className="Navbar__copyright">© 2023, Университет Плюс</div>
      </div>
    </div>
  );
};

export default MainNavBar;
