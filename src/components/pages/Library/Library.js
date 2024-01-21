import React, { useState, useEffect, useRef } from "react";
import {
  setCurrentFilters,
  clearCurrentFilters,
} from "features/library/librarySlice";
import { useDispatch, useSelector } from "react-redux";

import "./Library.css";
import ArrowImg from "components/common/Images/arrow-img";
import BookItem from "./components/BookItem";
import Loader from "components/common/Loader/";
import SubjectsFilter from "./components/SubjectsFilter";
import ExtendedFilter from "./components/ExtendedFilter";
import CurrentFilters from "./components/CurrentFilters";

const Library = () => {
  const dispatch = useDispatch();

  const { libraryData, filtersData, status, currentFilters } = useSelector(
    (state) => state.library
  );
  const [subjectSelectOpen, setSubjectSelectOpen] = useState(false);
  const [extendedSelectOpen, setExtendedSelectOpen] = useState(false);

  if (status === "loading" || !filtersData.subjects) {
    return <Loader />;
  }

  if (status == "error") {
    return (
      <div className="error__message">
        Раздел временно недоступен, попробуйте зайти позднее
      </div>
    );
  }

  const editFilters = (filter, data, from) => {
    dispatch(setCurrentFilters({ filter, data, from }));
  };

  const clearFilters = (all, filter) => {
    dispatch(clearCurrentFilters({ all, filter }));
  };

  return (
    <div className="Library">
      <div className="Library__wrap">
        <div className="Library__header">
          <div
            className="Library__subjectsBtn blueBtn"
            onClick={setSubjectSelectOpen}
          >
            <img src="/images/menu-img.svg" />
            Предметы
          </div>
          <div className="Library__search">
            <input className="Library__searchInput" placeholder="Поиск" />
            <img src="/images/search-img.svg" />
          </div>

          <div
            className="Library__extSearchBtn"
            onClick={setExtendedSelectOpen}
          >
            <div>Расширенный поиск</div>
            <ArrowImg color={"#0D4CD3"} width="7" height="12" />
          </div>
        </div>

        <div className="Library__body">
          <div className="Library__titleWrap">
            <div className="Library__title title">
              {currentFilters.subjects.length > 0
                ? currentFilters.subjects.join(", ")
                : "Все материалы"}
            </div>
            <div className="Library__booksCount">{libraryData.total}</div>
          </div>
          {currentFilters.types.length > 0 ||
          currentFilters.authors.length > 0 ? (
            <CurrentFilters
              currentFilters={currentFilters}
              editFilters={editFilters}
              clearFilters={clearFilters}
            />
          ) : (
            ""
          )}

          <div className="Library__books" id="container">
            {libraryData?.entities.map((bookData) => {
              return <BookItem key={bookData.Id} bookData={bookData} />;
            })}
          </div>
        </div>
      </div>
      <SubjectsFilter
        subjectSelectOpen={subjectSelectOpen}
        filtersData={filtersData}
        setSubjectSelectOpen={setSubjectSelectOpen}
        editFilters={editFilters}
      />
      <ExtendedFilter
        filtersData={filtersData}
        setExtendedSelectOpen={setExtendedSelectOpen}
        extendedSelectOpen={extendedSelectOpen}
        currentFilters={currentFilters}
        editFilters={editFilters}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default Library;
