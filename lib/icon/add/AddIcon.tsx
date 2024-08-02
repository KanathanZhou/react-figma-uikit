import React, {FC} from "react";
import {IconProps, IconSizeMap} from "../Icon.types";
import "../Icon.css"

const SIZE_MAP: IconSizeMap = {
  xs: 11,
  sm: 12,
  md: 13,
  lg: 15,
  xl: 17,
  xxl: 19,
  xxxl: 21,
}

const AddIcon: FC<IconProps> = ({
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
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE_MAP[size]}
        height={SIZE_MAP[size]}
        viewBox="2 1 13 13"
        data-theme={theme}
        onClick={onClick}
      >
        <path
          style={{
            fill: fill,
            opacity: opacity
          }}
          d="M15 8V7H9V1H8v6H2v1h6v6h1V8h6z"
          fillRule="nonzero"
          fillOpacity="1"
          fill="#000"
          stroke="none"
        />
      </svg>
    </>
  )

/*  return (
    <>
      {size === 'xs' && (
        <svg
          className="alamoma-svg"
          width={8}
          height={8}
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
          data-theme={theme}
          onClick={onClick}
        >
          <path
            style={{
              fill: fill,
              opacity: opacity
            }}
            d="M3.5 3.5V0h1v3.5H8v1H4.5V8h-1V4.5H0v-1h3.5z"
            fillRule="evenodd"
            fillOpacity="1"
            fill="#000"
            stroke="none"
          />
        </svg>
      )}
      {size === 'sm' && (
        <svg
          className="alamoma-svg"
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 16 16"
          data-theme={theme}
          onClick={onClick}
        >
          <path
            style={{
              fill: fill,
              opacity: opacity
            }}
            d="M15 8V7H9V1H8v6H2v1h6v6h1V8h6z"
            fillRule="nonzero"
            fillOpacity="1"
            fill="#000"
            stroke="none"
          />
        </svg>
      )}
      {size === 'md' && (
        <svg
          className="alamoma-svg"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          data-theme={theme}
          onClick={onClick}
        >
          <path
            style={{
              fill: fill,
              opacity: opacity
            }}
            d="M15 8V7H9V1H8v6H2v1h6v6h1V8h6z"
            fillRule="nonzero"
            fillOpacity="1"
            fill="#000"
            stroke="none"
          />
        </svg>
      )}
    </>
  )*/
}

export default AddIcon
