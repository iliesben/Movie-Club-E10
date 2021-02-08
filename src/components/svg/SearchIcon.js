import React from 'react';
import Svg, { Path } from "react-native-svg"

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
