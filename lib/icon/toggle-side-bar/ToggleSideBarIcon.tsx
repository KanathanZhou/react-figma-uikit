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

const ToggleSideBarIcon: FC<IconProps> = ({
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
      viewBox="8 9 16 14"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M9.5 10c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5H13V10H9.5Zm4.5 0v12h8.5c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5H14Zm-6 .5C8 9.672 8.672 9 9.5 9h13c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5h-13c-.828 0-1.5-.672-1.5-1.5v-11Z"
        fillRule="evenodd"
        fillOpacity="1"
        fill="#000"
        stroke="none"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default ToggleSideBarIcon
