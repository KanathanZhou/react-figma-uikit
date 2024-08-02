import React, {FC} from "react";
import './LoadingSpinner.css'
import './LoadingSpinner.size.css'
import './LoadingSpinner.skin.css'
import {LoadingSpinnerProps} from "./LoadingSpinner.types";
import classNames from "classnames";

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'md',
  skin,
  theme,
  style,
  className
}) => {
  return (
    <div
      className={classNames('alamoma-loading-spinner', size, skin, className)}
      style={style}
      data-theme={theme}
    />
  )
}

export default LoadingSpinner
