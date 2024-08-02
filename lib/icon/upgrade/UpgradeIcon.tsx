import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 18,
  sm: 19,
  md: 20,
  lg: 22,
  xl: 24,
  xxl: 26,
  xxxl: 28,
}

const UpgradeIcon: FC<IconProps> = ({
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
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M10 18.75c4.832 0 8.75-3.918 8.75-8.75 0-4.832-3.918-8.75-8.75-8.75-4.832 0-8.75 3.918-8.75 8.75 0 4.832 3.918 8.75 8.75 8.75zM10 20c5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10zm0-15.124-.442.442-3.75 3.75.884.884 2.683-2.683v7.866h1.25V7.269l2.683 2.683.884-.884-3.75-3.75L10 4.876z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default UpgradeIcon
