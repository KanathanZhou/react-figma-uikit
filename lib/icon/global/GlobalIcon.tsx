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

const GlobalIcon: FC<IconProps> = ({
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
      viewBox="2 2 12 12"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="M3.025 7.5h2.484c.06-1.737.427-3.263.971-4.265C4.615 3.83 3.225 5.49 3.026 7.5zM9.52 3.235c1.865.595 3.256 2.255 3.455 4.265h-2.484c-.06-1.737-.427-3.263-.971-4.265zM13.98 7.5C13.724 4.42 11.145 2 8 2 4.855 2 2.275 4.42 2.02 7.5H2v1h.02C2.276 11.58 4.856 14 8 14c3.145 0 5.725-2.42 5.98-5.5H14v-1h-.02zm-1.005 1h-2.484c-.06 1.736-.427 3.263-.972 4.265 1.866-.595 3.257-2.255 3.456-4.265zM8 13c.005 0 .024 0 .063-.02.043-.02.11-.065.198-.153.18-.183.388-.498.584-.969.348-.835.596-2.01.646-3.358H6.509c.05 1.349.298 2.523.646 3.358.196.47.404.786.584.969.087.088.155.133.198.153.04.02.058.02.063.02zm-1.52-.235c-.544-1.002-.912-2.529-.971-4.265H3.025c.2 2.01 1.59 3.67 3.456 4.265zM8 3c-.005 0-.024 0-.063.02-.043.02-.11.065-.198.153-.18.183-.388.498-.584.969-.348.835-.596 2.01-.646 3.358h2.982c-.05-1.349-.298-2.523-.646-3.358-.196-.47-.404-.786-.584-.969-.087-.088-.155-.132-.198-.154C8.023 3 8.005 3 8 3z"
        fill="#000"
        fillRule="evenodd"
        fillOpacity="1"
        stroke="none"
      />
    </svg>
  )
}

export default GlobalIcon
