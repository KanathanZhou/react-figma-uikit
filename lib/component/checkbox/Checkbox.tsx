import React, {FC, useCallback, useMemo} from "react";
import {CheckboxProps} from "./Checkbox.types";
import './Checkbox.css'
import './Checkbox.size.css'
import './Checkbox.skin.css'
import classNames from "classnames";
import {CheckmarkIcon} from "../../icon";

const ICON_SIZE_MAP = {
  xs: 6,
  sm: 7,
  md: 8,
  lg: 9,
  xl: 10,
  xxl: 11,
  xxxl: 12
}

const Checkbox: FC<CheckboxProps> = ({
  children,
  value,
  setValue,
  onChange,
  skin,
  style,
  className,
  size = 'md',
  theme,
  stopPropagation
}) => {
  const onClickCheckbox = useCallback((e: any) => {
    if (stopPropagation) {
      e.stopPropagation()
    }
    if (onChange) {
      onChange(!value)
    } else {
      if (setValue) {
        setValue(!value)
      }
    }
  }, [value, onChange, setValue, stopPropagation])

  const iconFill = useMemo(() => {
    return skin ? '#fff' : undefined
  }, [skin])

  return (
    <div
      className={classNames('alamoma-checkbox-container', size, skin, className)}
      style={style}
      data-theme={theme}
    >
      <div
        className={classNames('checkbox', { checked: value })}
        onClick={onClickCheckbox}
      >
        {value && <CheckmarkIcon fill={iconFill} width={ICON_SIZE_MAP[size]} height={ICON_SIZE_MAP[size]} />}
      </div>
      <>{children}</>
    </div>
  )
}

export default Checkbox
