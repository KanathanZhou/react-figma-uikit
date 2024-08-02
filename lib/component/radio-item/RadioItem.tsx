import React, {FC, useCallback} from "react";
import {RadioItemProps} from "./RadioItem.types";
import classNames from "classnames";
import './RadioItem.css'
import './RadioItem.size.css'

const RadioItem: FC<RadioItemProps> = ({
  children,
  tooltip,
  onClick,
  style,
  className,
  size = 'md',
  active = false,
  theme,
  // temporary solution for stopping the propagation on checkbox click event
  stopPropagation
}) => {
  const onClickRadio = useCallback((e: any) => {
    if (stopPropagation) {
      e.stopPropagation()
    }
    if (onClick) {
      onClick(e)
    }
  }, [onClick, stopPropagation])

  return (
    <div
      className={
        classNames('alamoma-radio-item', size, className)
      }
      title={tooltip}
      style={style}
      data-theme={theme}
    >
      <div
        className="radio-icon"
        onClick={onClickRadio}
      >
        {active && <div className="radio-icon-checked"/>}
      </div>

      <>{children}</>
    </div>
  )
}

export default RadioItem
