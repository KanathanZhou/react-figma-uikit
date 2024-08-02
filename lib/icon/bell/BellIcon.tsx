import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 13,
  sm: 14,
  md: 15,
  lg: 17,
  xl: 19,
  xxl: 21,
  xxxl: 23,
}

const BellIcon: FC<IconProps> = ({
  onClick,
  fill,
  opacity,
  size= 'md',
  theme
}) => {
  return (
    <svg
      className="alamoma-svg"
      // width={SIZE_MAP[size]}
      height={SIZE_MAP[size]}
      viewBox="9 9 14 15"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M20 14v3c0 .768.289 1.47.764 2h-9.528c.475-.53.764-1.232.764-2v-3c0-2.21 1.79-4 4-4 2.21 0 4 1.79 4 4zm1 0v3c0 1.105.895 2 2 2v1H9v-1c1.105 0 2-.895 2-2v-3c0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5zm-5 9c-1.105 0-2-.895-2-2h-1c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3h-1c0 1.105-.895 2-2 2z"
        fill="#000"
        fillRule="evenodd"
        fillOpacity="1"
        stroke="none"
      />
    </svg>
  )
}

export default BellIcon
