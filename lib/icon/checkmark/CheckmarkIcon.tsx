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

const CheckmarkIcon: FC<IconProps> = ({
  onClick,
  fill,
  opacity,
  size = 'md',
  theme,
  width,
  height
}) => {
  return (
    <svg
      className="alamoma-svg"
      width={width ?? SIZE_MAP[size]}
      height={height ?? SIZE_MAP[size]}
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
        d="M1.176 2.824L3.06 4.706 6.824.941 8 2.118 3.059 7.059 0 4l1.176-1.176z"
        fill="#000"
        fillRule="evenodd"
        fillOpacity="1"
        stroke="none"
      />
    </svg>
  )
}

export default CheckmarkIcon
