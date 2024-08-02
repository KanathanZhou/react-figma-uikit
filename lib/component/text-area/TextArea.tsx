import React, {ChangeEvent, FC, useCallback} from "react";
import './TextArea.css'
import './TextArea.size.css'
import './TextArea.flat.css'
import './TextArea.outlined.css'
import './TextArea.disabled.css'
import classNames from "classnames";
import {TextAreaProps} from "./TextArea.types";

const TextArea: FC<TextAreaProps> = ({
  value,
  setValue,
  placeholder,
  onChange,
  disabled = false,
  style,
  className,
  uiStyle = 'outlined',
  theme,
  backgroundColor,
  cornerRadius = '2px',
  rows,
  cols,
  minLength,
  maxLength,
  resizable = false,
  autoComplete,
  size = 'md'
}) => {
  const onTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e)
    } else if (setValue) {
      setValue(e.target.value)
    }
  }, [])

  return (
    <textarea
      className={
        classNames('alamoma-text-area', size, uiStyle, {
          'not-resizable': !resizable
        }, className)
      }
      style={{
        borderRadius: cornerRadius,
        backgroundColor: backgroundColor,
        ...style
      }}
      value={value}
      placeholder={placeholder}
      onChange={onTextChange}
      disabled={disabled}
      minLength={minLength}
      maxLength={maxLength}
      rows={rows}
      cols={cols}
      autoComplete={autoComplete}
      data-theme={theme}
    />
  )
}

export default TextArea