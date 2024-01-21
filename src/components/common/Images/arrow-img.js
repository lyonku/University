import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "6px"}
    height={props.height ? props.height : "10px"}
    viewBox="0 0 6 10"
    fill="none"
  >
    <path
      fill={props.color ? props.color : "#d2d5d9"}
      d="M.504 1.517A.715.715 0 0 1 1.516.507l3.779 3.787a1 1 0 0 1 0 1.412l-3.78 3.787a.715.715 0 0 1-1.011-1.01L3.978 5 .504 1.517Z"
    />
  </svg>
);
export default SvgComponent;
