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

const OpenInTabIcon: FC<IconProps> = ({
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
      viewBox="4 4 8 8"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M6.432 3.986H3.986v8.003h8.003V9.544h-1v1.445H4.986V4.986h1.446v-1zm1.556 1h2.294L7.634 7.634l.707.707 2.648-2.648v2.295h1V3.986H7.988v1z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default OpenInTabIcon
