import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 4,
  sm: 5,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 12,
  xxxl: 14,
}

const ArrowForwardIcon: FC<IconProps> = ({
  onClick,
  fill,
  opacity,
  size= 'md',
  theme
}) => {
  return (
    <svg
      className="alamoma-svg"
      // width={SIZE_MAP[size]} since width:height ratio = 4:6, just assign height and omit width, let it calculate on its own
      height={SIZE_MAP[size]}
      viewBox="1 0 4 6"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M5 3L1 0v6l4-3z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ArrowForwardIcon
