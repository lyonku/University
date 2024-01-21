import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <path
      fill={props.color ? props.color : "#0D4CD3"}
      fillRule="evenodd"
      d="M18 20.5h-5V22h5a2 2 0 0 0 2-2V8.4a2 2 0 0 0-.606-1.433l-4.526-4.401A2 2 0 0 0 13.474 2H6a2 2 0 0 0-2 2v10h1.5V4a.5.5 0 0 1 .5-.5h7.474a.5.5 0 0 1 .348.142l4.527 4.4a.5.5 0 0 1 .151.359V20a.5.5 0 0 1-.5.5Zm-4.168-7.842a.5.5 0 0 0-.691-.035l-.941.815 1.21 1.302.916-.8a.5.5 0 0 0 .036-.72l-.53-.562ZM5.5 19.239l5.565-4.819 1.216 1.308L6.82 20.5H5.5V19.24Zm9.954-7.047a2 2 0 0 1-.14 2.877l-7.648 6.685a1 1 0 0 1-.658.247H5a1 1 0 0 1-1-1v-1.99a1 1 0 0 1 .345-.756l7.814-6.766a2 2 0 0 1 2.766.141l.529.562Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
