import React, {FC} from "react";
import './Chip.css'
import './Chip.size.css'
import './Chip.filled.css'
import './Chip.outlined.css'
import classNames from "classnames";
import {ChipProps} from "./Chip.types";

const Chip: FC<ChipProps> = ({
  children,
  skin,
  onClick,
  style,
  className,
  cornerRadius = '4px',
  size = 'md',
  border = false,
  active = true,
  uiStyle = 'filled',
  theme
}) => {
  return (
    <span
      className={
        classNames('alamoma-chip', size, skin, uiStyle, {
          active: active,
          border: border
        }, className)
      }
      onClick={onClick}
      style={{
        borderRadius: cornerRadius,
        ...style
      }}
      data-theme={theme}
    >
      {children}
    </span>
  )
}

export default Chip
