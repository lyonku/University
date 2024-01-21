import React, { useState, useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import CloseImg from "components/common/Images/close-img";

function SubjectsFilter({
  subjectSelectOpen,
  editFilters,
  filtersData,
  setSubjectSelectOpen,
}) {
  const ref = useRef(null);

  useClickAway(ref, () => {
    setSubjectSelectOpen(false);
  });

  return (
    <div className={`Library__subjectSelect ${subjectSelectOpen && "open"}`}>
      <div className="Library__subjectSelect-wrap" ref={ref}>
        <div className="Library__subjectSelect-title title">
          Выберете предмет
        </div>
        <div className="Library__subjectSelect-items">
          {filtersData?.subjects?.map((subject) => {
            return (
              <div
                className="Library__subjectSelect-item"
                key={subject.id}
                onClick={() => {
                  editFilters("subjects", [subject.name], "subjectFilter");
                  setSubjectSelectOpen(false);
                }}
              >
                {subject.name}
              </div>
            );
          })}
        </div>
        <div
          className="Library__subjectSelect-close"
          onClick={() => {
            setSubjectSelectOpen(false);
          }}
        >
          <CloseImg color="#FFFFFF" />
        </div>
      </div>
      <div className="Library__subjectSelect-background"></div>
    </div>
  );
}

export default SubjectsFilter;
