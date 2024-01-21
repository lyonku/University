import * as React from "react";
const FavoriteImg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : "#2DC36A"}
      fillRule="evenodd"
      d="m12 16.308.694.362 4.806 2.51V5a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v14.18l4.806-2.51.694-.362ZM12 18l5.537 2.892A1 1 0 0 0 19 20.006V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v15.006a1 1 0 0 0 1.463.886L12 18Z"
      clipRule="evenodd"
    />
  </svg>
);
export default FavoriteImg;
