import React from "react";
import Svg, { Path } from "react-native-svg"

export const PlayIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M3,22V2L21,12Z"
        fill={props.fill}
      ></Path>
    </Svg>
  );
}
