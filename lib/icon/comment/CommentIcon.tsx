import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 16,
  sm: 17,
  md: 18,
  lg: 20,
  xl: 22,
  xxl: 24,
  xxxl: 26,
}

const CommentIcon: FC<IconProps> = ({
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
      viewBox="0 2 18 16"
      xmlns="http://www.w3.org/2000/svg"
      data-theme={theme}
      onClick={onClick}
    >
      <path
        style={{
          fill: fill,
          opacity: opacity
        }}
        d="m1.944 16.75 1.696-2.758.287-.465-.237-.493c-.465-.951-.697-1.91-.69-3.034 0-3.866 3.134-7 7-7 3.866 0 7 3.134 7 7 0 3.866-3.134 7-7 7-1.14.007-2.112-.232-3.074-.709l-.268-.131-.296.037-4.418.552zm4.543.44c1.06.518 2.253.81 3.513.81 4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8-4.418 0-8 3.582-8 8 0 1.243.283 2.419.789 3.468l-2.117 3.44L0 18l1.272-.159 5.215-.652z"
        fillRule="nonzero"
        fillOpacity="1"
        fill="#000"
        stroke="none"
      />
    </svg>
  )
}

export default CommentIcon
