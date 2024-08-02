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

const ResizeToFitIcon: FC<IconProps> = ({
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
      viewBox="1.5 1.5 15 15"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m12.465 4.836.01-.018L15.65 1.65l.707.707-3.196 3.196-.754.45h3.597v1h-5v-5h1V5.67l.46-.834h.001zm-6.922 8.335-.01.018-3.176 3.168-.707-.707 3.196-3.196.754-.45H2.004v-1h5v5h-1v-3.667l-.461.835v-.001z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ResizeToFitIcon
