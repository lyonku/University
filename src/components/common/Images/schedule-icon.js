import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={props.color ? props.color : "#0D4CD3"}
      fillRule="evenodd"
      d="M15.5 4.5v2H17v-2h1A1.5 1.5 0 0 1 19.5 6v2.016h-15V6A1.5 1.5 0 0 1 6 4.5h1v2h1.5v-2h7Zm-11 5.016V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5V9.516h-15ZM6 3h1V1h1.5v2h7V1H17v2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
