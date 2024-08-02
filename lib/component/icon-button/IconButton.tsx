import React, {FC} from "react";
import './IconButton.css'
import './IconButton.size.css'
import {IconButtonProps} from "./IconButton.types";
import classNames from "classnames";

const IconButton: FC<IconButtonProps> = ({
  children,
  onClick,
  className,
  style,
  title,
  size = 'md',
  cornerRadius,
  theme,
}) => {
  return (
    <div
      className={
        classNames('alamoma-icon-button', size, className)
      }
      style={{
        borderRadius: cornerRadius,
        ...style
      }}
      onClick={onClick}
      title={title}
      data-theme={theme}
    >
      {children}
    </div>
  )
}

export default IconButton
