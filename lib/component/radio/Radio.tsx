import React, {FC, useCallback} from "react";
import {RadioProps} from "./Radio.types";
import classNames from "classnames";
import './Radio.css'
import {RadioOption} from "../../model";
import RadioItem from "../radio-item";

const Radio: FC<RadioProps> = ({
  options,
  value,
  setValue,
  onChange,
  direction = 'vertical',
  style,
  className,
  size = 'md',
  theme,
  stopPropagation
}) => {
  const onClickRadioItem = useCallback((option: RadioOption) => {
    if (value !== option.value) {
      if (onChange) {
        onChange(option)
      } else {
        setValue?.(option.value)
      }
    }
  }, [value, onChange, setValue, stopPropagation])

  return (
    <div
      className={
        classNames('alamoma-radio', direction, className)
      }
      style={style}
      data-them={theme}
    >
      {options.map((option, index) => {
        return (
          <RadioItem
            key={index}
            onClick={() => onClickRadioItem(option)}
            active={value === option.value}
            size={size}
            stopPropagation={stopPropagation}
            tooltip={option.label}
            theme={theme}
          >
            {option.label}
          </RadioItem>
        )
      })}
    </div>
  )
}

export default Radio
