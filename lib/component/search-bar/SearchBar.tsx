import React, {FC} from "react";
import {SearchBarProps} from "./SearchBar.types";
import './SearchBar.css'
import './SearchBar.flat.css'
import './SearchBar.outlined.css'
import './SearchBar.size.css'
import './SearchBar.disabled.css'
import {SearchIcon} from "../../icon";
import TextInput from "../text-input";
import classNames from "classnames";

const ICON_SIZE_MAP_OUTLINE = {
  xs: 20,
  sm: 22,
  md: 24,
  lg: 26,
  xl: 28,
  xxl: 30,
  xxxl: 32
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  setValue,
  placeholder,
  onInput,
  backgroundColor,
  cornerRadius,
  style,
  theme,
  size = 'md',
  uiStyle = 'flat',
  disabled,
  showFocusedBorder = false,
  inputStyle,
  inputClassName
}) => {
  return (
    <div
      className={
        classNames('alamoma-search-bar', uiStyle, size, {
          disabled: disabled,
          'focused-border': showFocusedBorder,
        })
      }
      style={{
        borderRadius: cornerRadius,
        backgroundColor: backgroundColor,
        ...style
      }}
      data-theme={theme}
    >
      <div className="icon-slot">
        {uiStyle === 'flat' && (
          <>
            {disabled ? (
              <SearchIcon fill="#00000080" size={size}/>
            ) : (
              <SearchIcon theme={theme} size={size}/>
            )}
          </>
        )}
        {uiStyle === 'outlined' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={ICON_SIZE_MAP_OUTLINE[size]}
            height={ICON_SIZE_MAP_OUTLINE[size]}
            viewBox="0 0 32 32"
          >
            <path
              fill="#fff"
              fillOpacity=".9"
              fillRule="evenodd"
              stroke="#fff"
              strokeWidth={1}
              d="M20 15c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5zm-1.126 4.581C17.83 20.466 16.477 21 15 21c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6 3.314 0 6 2.686 6 6 0 1.477-.534 2.83-1.419 3.874l4.273 4.272-.708.708-4.272-4.273z">
            </path>
          </svg>
        )}
      </div>
      <TextInput
        value={value}
        setValue={setValue}
        type="text"
        placeholder={placeholder}
        uiStyle="embed"
        onInput={onInput}
        size={size}
        theme={theme}
        disabled={disabled}
        style={{
          flex: 1,
          ...inputStyle
        }}
        className={inputClassName}
      />
    </div>
  )
}

export default SearchBar
