import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 10,
  sm: 11,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
  xxxl: 20,
}

const SearchIcon: FC<IconProps> = ({
                                     onClick,
                                     fill,
                                     opacity,
                                     size = 'md',
                                     theme
                                   }) => {
  return (
    <svg
      className="alamoma-svg"
      width={SIZE_MAP[size]}
      height={SIZE_MAP[size]}
      viewBox="10 10 12 12"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M19.103 15.052c0 1.961-1.59 3.551-3.551 3.551-1.962 0-3.552-1.59-3.552-3.551 0-1.962 1.59-3.552 3.552-3.552 1.961 0 3.551 1.59 3.551 3.552zm-.706 3.553c-.78.625-1.768.998-2.845.998-2.514 0-4.552-2.037-4.552-4.551 0-2.514 2.038-4.552 4.552-4.552 2.514 0 4.551 2.038 4.551 4.552 0 1.077-.373 2.066-.999 2.846l3.25 3.249-.708.707-3.249-3.25z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default SearchIcon
