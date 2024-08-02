import React, {FC} from "react";
import './Alert.css'
import './Alert.size.css'
import './Alert.mode.css'
import {AlertProps} from "./Alert.types";
import classNames from "classnames";
import {CheckmarkIcon, CloseIcon, InfoIcon} from "../../icon";

const Alert: FC<AlertProps> = ({
  children,
  mode = 'info',
  size = 'md',
  theme,
  style,
  className,
  cornerRadius
}) => {
  return (
    <div
      className={
        classNames('alamoma-alert', size, mode, className)
      }
      style={{
        borderRadius: cornerRadius,
        ...style
      }}
      data-theme={theme}
    >
      <div className="icon-container">
        {mode === 'info' && <InfoIcon size={size} />}
        {mode === 'success' && <CheckmarkIcon theme="dark" size={size} />}
        {mode === 'warning' && <InfoIcon theme="dark" size={size} />}
        {mode === 'error' && <CloseIcon theme="dark" size={size} />}
      </div>

      <div style={{flex: 1}}>
        {children}
      </div>
    </div>
  )
}

export default Alert
