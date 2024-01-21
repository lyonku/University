import * as React from "react";
const DownloadImg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : "#0D4CD3"}
      fillRule="evenodd"
      d="M8 8.5h1.5v-4h5v4h3.379L12 14.379 6.121 8.5H8ZM8 4v3H4.914c-.89 0-1.337 1.077-.707 1.707l7.086 7.086a1 1 0 0 0 1.414 0l7.086-7.086c.63-.63.184-1.707-.707-1.707H16V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1ZM2 19v-3h1.5v3a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-3H22v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DownloadImg;
