import * as React from "react";
const AboutImg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : "#66727F"}
      fillRule="evenodd"
      d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.034-4.8v1.848h-1.932V7.2h1.932ZM11.118 17v-6.5h1.764V17h-1.764Z"
      clipRule="evenodd"
    />
  </svg>
);
export default AboutImg;
