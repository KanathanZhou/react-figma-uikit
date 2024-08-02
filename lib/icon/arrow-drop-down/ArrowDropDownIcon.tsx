import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 6,
  sm: 7,
  md: 8,
  lg: 10,
  xl: 12,
  xxl: 14,
  xxxl: 16,
}

const ArrowDropDownIcon: FC<IconProps> = ({
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
      // height={SIZE_MAP[size]}
      viewBox="0 0 8 7"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m3.646 5.354-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ArrowDropDownIcon
