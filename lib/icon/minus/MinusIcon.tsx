import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 10,
  sm: 11,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
  xxxl: 20,
}

const MinusIcon: FC<IconProps> = ({
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
      viewBox="0 2 12 2"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M11.5 3.5H.5v-1h11v1z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default MinusIcon
