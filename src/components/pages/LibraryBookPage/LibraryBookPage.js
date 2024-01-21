import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBook } from "features/library/librarySlice";

import ArrowImg from "components/common/Images/arrow-img";
import "./LibraryBookPage.css";
import DownloadImg from "components/common/Images/download-img";
import FavoriteImg from "components/common/Images/favorite-img";

function LibraryBookPage({}) {
  const { currentBook } = useSelector((state) => state.library);
  const locationSelect = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentBook(locationSelect));
  }, [locationSelect]);

  return (
    <div className="LibraryBookPage">
      <div className="LibraryBookPage__wrap">
        <div
          className="LibraryBookPage__backBtn"
          onClick={() => navigate("/Library")}
        >
          <ArrowImg color="#0D4CD3" />
          Назад
        </div>
        <div className="LibraryBookPage__body">
          <div className="LibraryBookPage__header">
            <div className="LibraryBookPage__imgs">
              <img src={currentBook?.CoverObjectName} />
            </div>
            <div className="BookPageInfo">
              <div className="BookPageInfo__header">
                <div className="BookPageInfo__options">
                  <div className="BookPageInfo__type">{currentBook?.Type}</div>
                  <div className="BookPageInfo__readed">
                    <img src="/images/downloaded.svg" />
                    Прочитано
                  </div>
                </div>
                <div className="BookPageInfo__title">
                  {currentBook?.ShortDesc}
                </div>
                <div className="BookPageInfo__author">
                  Автор: <span>{currentBook?.Author}</span>
                </div>
              </div>
              <div className="BookPageInfo__btns">
                <div className="BookPageInfo__downloadBtn">
                  <DownloadImg color="#ffffff" /> Скачать
                </div>
                <div className="BookPageInfo__favouriteBtn">
                  <FavoriteImg color="#0D4CD3" /> В список для чтения
                </div>
              </div>
            </div>
          </div>
          <div className="LibraryBookPage__desc">{currentBook?.LongDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default LibraryBookPage;
