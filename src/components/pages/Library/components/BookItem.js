import React, { useState, useEffect, useRef } from "react";
import DownloadImg from "components/common/Images/download-img";
import FavoriteImg from "components/common/Images/favorite-img";
import AboutImg from "components/common/Images/about-img";
import OptionsItem from "./OptionsItem";
import { useClickAway } from "react-use";
import { useNavigate } from "react-router-dom";

const BookItem = ({ bookData }) => {
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const ref = useRef(null);
  const nonref = useRef(null);
  const navigate = useNavigate();

  const optionsMenu = [
    {
      component: AboutImg,
      text: "Подробнее",
      action: () => {
        navigate(`/Library/${bookData.Id}`);
      },
    },
    { component: FavoriteImg, text: "В список для чтения" },
    { component: DownloadImg, text: "Скачать" },
  ];

  const handleOptionsMenuOpen = () => {
    setOptionsMenuOpen((prevOptionsMenuOpen) => !prevOptionsMenuOpen);
  };

  useClickAway(ref, () => {
    setOptionsMenuOpen(false);
  });

  return (
    <div className="Book">
      <div className="Book__controls">
        <div className="Book__indicators">
          <div className="Book__downloaded">
            <img src="/images/downloaded.svg" />
          </div>
          <div className="Book__favourite">
            <FavoriteImg />
          </div>
        </div>
        <div
          className={`book__options ${optionsMenuOpen && "book__options_open"}`}
          onClick={handleOptionsMenuOpen}
          ref={optionsMenuOpen ? ref : nonref}
        >
          <img src="/images/options.svg" />
          <div
            className={`optionsMenu ${
              optionsMenuOpen && "optionsMenu__item_open"
            }`}
            id="block"
            ref={optionsMenuOpen ? ref : nonref}
          >
            {optionsMenu.map((option, index) => {
              return (
                <OptionsItem
                  navigate={navigate}
                  option={option}
                  key={index}
                  action={option.action}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="Book__img">
        <img src={bookData.CoverObjectName} />
      </div>
      <div className="Book__textBlock">
        <div className="Book__authors">{bookData.Author}.</div>
        <div className="Book__title">{bookData.ShortDesc}</div>
        <div className="Book__typeBlock">
          <div className="Book__type">{bookData.Type}</div>
          <div className="Book__download">
            <DownloadImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
