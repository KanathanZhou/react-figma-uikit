import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 14,
  sm: 15,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 22,
  xxxl: 24,
}

const UnionIcon: FC<IconProps> = ({
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M17 17V6h-5V1H1v11h5v5h11z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default UnionIcon
