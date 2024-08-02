import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 8,
  sm: 9,
  md: 10,
  lg: 12,
  xl: 14,
  xxl: 16,
  xxxl: 18,
}

const ArrowDetailForwardIcon: FC<IconProps> = ({
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
      viewBox="10 11 10 10"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m12.994 20.29.708.709 5.206-5L13.702 11l-.708.708 4.5 4.292-4.5 4.29z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ArrowDetailForwardIcon
