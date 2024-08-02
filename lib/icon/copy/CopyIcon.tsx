import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"
import classNames from "classnames";

const SIZE_MAP: IconSizeMap = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 22,
}

const CopyIcon: FC<IconProps> = ({
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
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M9 1H2c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1v1c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0h7c1.105 0 2 .895 2 2h-1c0-.552-.448-1-1-1zM5 4h7c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1zM3 5c0-1.105.895-2 2-2h7c1.105 0 2 .895 2 2v7c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default CopyIcon
