import React, {FC} from "react"
import './ToolBar.css'
import './ToolBar.size.css'
import classNames from "classnames"
import {ToolBarProps} from "./ToolBar.types"
import {CloseIcon} from "../../icon";
import IconButton from "../icon-button";

const ToolBar: FC<ToolBarProps> = ({
  children,
  title,
  size = 'md',
  style,
  className,
  contentStyle,
  contentClassName,
  showBottomBorder = true,
  showClose = false,
  onClose,
  theme,
}) => {

  return (
    <div
      className={
        classNames('alamoma-tool-bar', size, {
          'bottom-border': showBottomBorder
        }, className)
      }
      style={style}
      data-theme={theme}
    >
      {title && <div className="title">{title}</div>}
      <div
        className={
          classNames('body', contentClassName)
        }
        style={contentStyle}
      >
        {children}
      </div>
      {showClose && (
        <div className="close-slot">
          <>
            {(size === 'xs' || size === 'sm' || size === 'md') ? (
              <CloseIcon onClick={onClose} size={size} />
            ) : (
              <IconButton onClick={onClose} size="md">
                <CloseIcon />
              </IconButton>
            )}
          </>
        </div>
      )}
    </div>
  )
}

export default ToolBar
