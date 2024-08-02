import React, {FC} from "react"
import './ToolBar.css'
import classNames from "classnames"
import {TooltipProps} from "./Tooltip.types";

const Tooltip: FC<TooltipProps> = ({
  children,
  style,
}) => {
  return (
      <div
          className={
            classNames('alamoma-tooltip')
          }
          style={style}
      >
        {children}
      </div>
  )
}

export default Tooltip
