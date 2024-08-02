import React, {FC, FormEvent, useCallback} from "react";
import {TextInputProps} from "./TextInput.types";
import './TextInput.css'
import './TextInput.size.css'
import './TextInput.flat.css'
import './TextInput.hover-outlined.css'
import './TextInput.outlined.css'
import './TextInput.embed.css'
import './TextInput.disabled.css'
import classNames from "classnames"

const TextInput: FC<TextInputProps> = ({
  value,
  setValue,
  placeholder,
  onInput,
  disabled = false,
  style,
  type = 'text',
  uiStyle = 'outlined',
  theme,
  backgroundColor,
  cornerRadius,
  minLength,
  maxLength,
  min,
  max,
  size = 'md',
  prefix,
  className,
  autoComplete
}) => {

  const onTextInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(e)
    } else if (setValue) {
      setValue((e.target as any).value)
    }
  }, [onInput, setValue])

  return (
    <div
      className={
        classNames('alamoma-text-input-container', size, uiStyle, {
          disabled: disabled
        }, className)
      }
      style={{
        borderRadius: cornerRadius,
        backgroundColor: backgroundColor,
        ...style
      }}
      data-theme={theme}
    >
      {prefix && <div className="prefix">{prefix}</div>}

      <input
        className={
          classNames('alamoma-text-input', 'flat', size)
        }
        type={type}
        value={value}
        placeholder={placeholder}
        onInput={onTextInput}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default TextInput
