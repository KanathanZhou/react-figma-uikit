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

const RestartIcon: FC<IconProps> = ({
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
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M3.885 6.18 2.068 4h3.495v.031C5.73 4.011 5.9 4 6.073 4c2.29 0 4.146 1.856 4.146 4.147 0 2.29-1.856 4.146-4.146 4.146-1.99 0-3.652-1.401-4.054-3.27H1c.416 2.424 2.529 4.27 5.073 4.27 2.842 0 5.146-2.304 5.146-5.146C11.219 5.304 8.915 3 6.073 3H2.068L3.885.82 3.116.18l-2.5 3-.266.32.266.32 2.5 3 .769-.64z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default RestartIcon
