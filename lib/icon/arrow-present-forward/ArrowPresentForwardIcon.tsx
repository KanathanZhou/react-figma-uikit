import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 11,
  sm: 12,
  md: 13,
  lg: 15,
  xl: 17,
  xxl: 19,
  xxxl: 21,
}

const ArrowPresentForwardIcon: FC<IconProps> = ({
                                             onClick,
                                             fill,
                                             opacity,
                                             size = 'md',
                                             theme
                                           }) => {
  return (
    <svg
      className="alamoma-svg"
      // width={SIZE_MAP[size]}
      height={SIZE_MAP[size]}
      viewBox="0 0 8 13"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M7.5 6.5 1 0 0 1l5.5 5.5L0 12l1 1 6.5-6.5z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ArrowPresentForwardIcon
