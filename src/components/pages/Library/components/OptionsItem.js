import React, { useState, useEffect, useRef } from "react";

const BookItem = ({ option, action }) => {
  const [hover, sethover] = useState(false);

  const Component = option.component;
  return (
    <div
      className="optionsMenu__item"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      onClick={action}
    >
      <Component color={hover ? "#0B1F33" : "#66727F"} />
      {option.text}
    </div>
  );
};

export default BookItem;
