import React, { useState, useEffect, useRef } from "react";
import CloseImg from "components/common/Images/close-img";
import FilterItem from "./FilterItem";
import { useClickAway } from "react-use";

function ExtendedFilter({
  filtersData,
  editFilters,
  setExtendedSelectOpen,
  extendedSelectOpen,
  currentFilters,
  clearFilters,
}) {
  const filters = [
    {
      title: "Предмет",
      name: "subjects",
      data: filtersData.subjects,
      search: true,
      clear: true,
    },
    {
      title: "Автор",
      name: "authors",
      data: filtersData.authors,
      search: true,
      clear: true,
    },
    { title: "Тип", name: "types", data: filtersData.types, chosen: [] },
    {
      title: "Статус",
      name: "status",
      data: [
        { id: 1, name: "Прочитано" },
        { id: 2, name: "В моем списке для чтения" },
      ],
    },
  ];

  const ref = useRef(null);

  useClickAway(ref, () => {
    setExtendedSelectOpen(false);
  });

  return (
    <div className={`ExtendedFilter ${extendedSelectOpen && "open"}`}>
      <div className="ExtendedFilter__background "></div>
      <div className="ExtendedFilter__wrap" ref={ref}>
        <div
          className="ExtendedFilter__closeBtn"
          onClick={() => setExtendedSelectOpen(false)}
        >
          <CloseImg color="#FFFFFF" />
        </div>
        <div className="ExtendedFilter__filters">
          <div className="ExtendedFilter__title title">Расширенный поиск</div>
          {filters.map((filter) => {
            return (
              <FilterItem
                key={filter.title}
                filtersData={filter.data}
                title={filter.title}
                name={filter.name}
                search={filter.search}
                clear={filter.clear}
                currentFilter={currentFilters[filter.name]}
                editFilters={editFilters}
                clearFilters={clearFilters}
              />
            );
          })}
        </div>
        <div className="ExtendedFilter__btns">
          <div className="ExtendedFilter__confirmBtn blueBtn">Применить</div>
          <div
            className="ExtendedFilter__clearBtn"
            onClick={() => clearFilters(true)}
          >
            Очистить
            <CloseImg color="#9DACCE" width="16px" height="16px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedFilter;
