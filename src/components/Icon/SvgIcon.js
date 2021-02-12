import React from "react";
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../styles/style";

export const BackIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="31"
      fill="none"
      viewBox="0 0 38 31"
      {...props}
    >
      <Path
        fill={COLORS.secondary}
        d="M35.864 12.573l.06.013H10.494l7.994-7.868c.391-.385.606-.905.606-1.451a2.02 2.02 0 00-.606-1.448L17.245.597A2.081 2.081 0 0015.777 0a2.08 2.08 0 00-1.469.595L.606 14.052c-.393.386-.608.9-.606 1.446-.002.55.213 1.064.606 1.449l13.702 13.458c.392.384.913.595 1.47.595.555 0 1.076-.212 1.467-.595l1.244-1.222c.391-.384.606-.896.606-1.442 0-.546-.215-1.031-.606-1.415l-8.084-7.913h25.487c1.146 0 2.108-.969 2.108-2.093V14.59c0-1.124-.99-2.018-2.136-2.018z"
      ></Path>
    </Svg>
  );
}

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

export const PlayIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M3,22V2L21,12Z"
        fill={COLORS.secondary}
      ></Path>
    </Svg>
  );
}

export const SearchIcon = (props) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.417 9.23l4.158 3.879-1.242 1.156-4.166-3.871V9.78l-.225-.217a5.633 5.633 0 01-3.525 1.218C2.425 10.782 0 8.524 0 5.74 0 2.955 2.425.698 5.417.698c2.991 0 5.416 2.257 5.416 5.042 0 1.249-.491 2.397-1.308 3.28l.233.21h.659zm-8.75-3.49c0 1.931 1.675 3.49 3.75 3.49s3.75-1.559 3.75-3.49c0-1.932-1.675-3.49-3.75-3.49s-3.75 1.558-3.75 3.49z"
        fill={props.fill}
        fillRule="evenodd"
      />
    </Svg>
  )
}
