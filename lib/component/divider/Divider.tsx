import React, {FC} from 'react'
import {DividerProps} from "./Divider.types";
import './Divider.css'
import classNames from "classnames";

const Divider: FC<DividerProps> = ({
  top= '0',
  left= '0',
  right = '0',
  bottom= '0',
  direction = 'horizontal',
  color,
  theme = 'auto'
}) => {
  return (
      <div
          className={
            classNames('alamoma-divider', {
              horizontal: direction === 'horizontal',
              vertical: direction === 'vertical',
              light: theme === 'light',
              dark: theme === 'dark',
            })
          }
          style={{
            marginTop: top,
            marginLeft: left,
            marginRight: right,
            marginBottom: bottom,
            ...(color && { backgroundColor: color })
          }}
      />
  )
}

export default Divider
