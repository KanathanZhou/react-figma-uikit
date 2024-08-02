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

const MoreIcon: FC<IconProps> = ({
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
      viewBox="0 0 16 6"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M3.5 3c0 .828-.672 1.5-1.5 1.5C1.172 4.5.5 3.828.5 3c0-.828.672-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5zm6 0c0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5zM14 4.5c.828 0 1.5-.672 1.5-1.5 0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5 0 .828.672 1.5 1.5 1.5z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default MoreIcon
