import React from "react";
import Svg, { Path } from "react-native-svg"

export const HomeIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M12 6.453l9 8.375V24h-6v-6H9v6H3v-9.172l9-8.375zm12 5.695L12 1 0 12.133l1.361 1.465L12 3.73l10.639 9.883L24 12.148z"
        fill={props.fill}
      ></Path>
    </Svg>
  );
}

