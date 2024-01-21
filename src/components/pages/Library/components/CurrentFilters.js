import CloseImg from "components/common/Images/close-img";
function CurrentFilters({ currentFilters, editFilters, clearFilters }) {
  return (
    <div className="currentFilters">
      {currentFilters.types.map((item, index) => {
        return (
          <div className="currentFilter__item" key={index}>
            {item}
            <CloseImg
              color="#9DACCE"
              width="16px"
              height="16px"
              onClick={() => editFilters("types", item)}
            />
          </div>
        );
      })}
      {currentFilters.authors.map((item, index) => {
        return (
          <div className="currentFilter__item" key={index}>
            {item}
            <CloseImg
              color="#9DACCE"
              width="16px"
              height="16px"
              onClick={() => editFilters("authors", item)}
            />
          </div>
        );
      })}
      <div className="currentFilters__clear" onClick={() => clearFilters(true)}>
        Сбросить всё
        <CloseImg color="#9DACCE" width="16px" height="16px" />
      </div>
    </div>
  );
}

export default CurrentFilters;
