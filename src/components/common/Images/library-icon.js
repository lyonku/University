import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={props.color ? props.color : "#0D4CD3"}
      fillRule="evenodd"
      d="M12 4.5h5.5V15H8c-.546 0-1.059.146-1.5.401V6A1.5 1.5 0 0 1 8 4.5v3.278a.25.25 0 0 0 .324.24L10 7.5l1.676.517A.25.25 0 0 0 12 7.778V4.5Zm-4 15a1.5 1.5 0 0 1 0-3h9.5v3H8ZM19 4v16a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
