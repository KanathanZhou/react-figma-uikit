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

const InfoIcon: FC<IconProps> = ({
                                   onClick,
                                   fill,
                                   opacity,
                                   size = 'md',
                                   theme
                                 }) => {
  return (
    <>
      <svg
        className="alamoma-svg"
        width={SIZE_MAP[size]}
        height={SIZE_MAP[size]}
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        data-theme={theme}
        onClick={onClick}
      >
        <path
          style={{
            fill: fill,
            opacity: opacity
          }}
          d="M6 12c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6zm0-.667C3.054 11.333.667 8.946.667 6 .667 3.054 3.054.667 6 .667c2.946 0 5.333 2.387 5.333 5.333 0 2.946-2.387 5.333-5.333 5.333zm-.666-6h1.333v4H5.334v-4zm0-2c0-.368.298-.666.667-.666.368 0 .666.298.666.666 0 .369-.298.667-.666.667-.369 0-.667-.298-.667-.667z"
          fillRule="nonzero"
          fillOpacity="1"
          fill="#000"
          stroke="none"
        />
      </svg>
    </>
  )
}

export default InfoIcon
