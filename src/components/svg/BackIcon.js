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