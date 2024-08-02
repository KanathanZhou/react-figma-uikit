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

const ArrowDropUpIcon: FC<IconProps> = ({
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
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m.646 4.647.708.707L4 2.707l2.646 2.647.708-.707L4 1.293.646 4.647z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ArrowDropUpIcon
