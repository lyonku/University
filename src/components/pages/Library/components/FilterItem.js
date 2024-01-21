import CloseImg from "components/common/Images/close-img";
import ArrowImg from "components/common/Images/arrow-img";
import { useState, useEffect } from "react";

function FilterItem({
  filtersData,
  title,
  name,
  search,
  clear,
  currentFilter,
  editFilters,
  clearFilters,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filterOpen, setFilterOpen] = useState(true);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilterOpen = () => {
    setFilterOpen((prevFilterOpen) => !prevFilterOpen);
  };

  return (
    <div className={`FilterItem ${!filterOpen && "close"}`}>
      <div className="FilterItem__header">
        <div className="FilterItem__title">
          {title}
          {search && (
            <div className="FilterItem__itemsCount">
              {currentFilter.length > 0 ? currentFilter.length : ""}
            </div>
          )}
        </div>
        <div className="FilterItem__btns">
          {clear && (
            <div
              className="FilterItem__clearBtn"
              onClick={() => clearFilters(false, name)}
            >
              <CloseImg color="#9DACCE" width="16px" />
              <div className="FilterItem__text">Очистить</div>
            </div>
          )}
          <div className="FilterItem__wrapBtn" onClick={handleFilterOpen}>
            <ArrowImg color={"#0D4CD3"} />
          </div>
        </div>
      </div>
      {search && (
        <div className="FilterItem__searchField">
          <input
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={handleSearchValue}
          />
        </div>
      )}

      <div className="FilterItem__items">
        {filtersData.map((item) => {
          if (
            !searchValue ||
            item.name.toLowerCase().indexOf(searchValue.toLowerCase(), 0) != -1
          ) {
            return (
              <div className="FilterItem__item" key={item.id}>
                <input
                  type="checkbox"
                  id={item.name}
                  name={item.name}
                  className="LoginInput__checkbox"
                  checked={currentFilter.includes(item.name)}
                  onChange={() => {
                    editFilters(name, item.name, "extendedFilter");
                  }}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FilterItem;
