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

const ResizeToFullIcon: FC<IconProps> = ({
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
      viewBox="2 2 14 14"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m14.54 4.168-3.187 3.186-.708-.708 3.197-3.197.753-.449H11V2h5v5h-1V3.334l-.46.834zM3.46 13.832l3.186-3.186.708.708-3.198 3.197-.752.449H7v1H2v-5h1v3.666l.46-.834z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default ResizeToFullIcon
