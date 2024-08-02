import React, {FC} from "react";
import {ButtonProps} from "./Button.types";
import './Button.css'
import './Button.size.css'
import './Button.filled.css'
import './Button.flat.css'
import './Button.linkage.css'
import './Button.outlined.css'
import './Button.text.css'
import classNames from "classnames";

const Button: FC<ButtonProps> = ({
  children,
  uiStyle = 'filled',
  skin,
  size = 'md',
  theme,
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        classNames('alamoma-button', size, skin, uiStyle, props.className)
      }
      data-theme={theme}
    >
      {children}
    </button>
  )
}

export default Button
