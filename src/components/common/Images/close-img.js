import * as React from "react";
const CloseImg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "24px"}
    height={props.height ? props.height : "24px"}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#1D5DEB"}
      strokeWidth={1.5}
      d="m3.923 19.923 16-16M3.923 3.923l16 16"
    />
  </svg>
);
export default CloseImg;
