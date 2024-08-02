import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 22,
}

const ListVerticalIcon: FC<IconProps> = ({
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
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M0 0h14v1H0V0zm0 5.5h14v1H0v-1zM14 11H0v1h14v-1z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ListVerticalIcon
