import React, {FC} from 'react'
import './ListItem.css'
import './ListItem.size.css'
import './ListItem.checkmark.css'
import './ListItem.checkbox.css'
import './ListItem.radio.css'
import './ListItem.filled.css'
import './ListItem.outlined.css'
import {ListItemProps} from "./ListItem.types";
import classNames from "classnames";
import {CheckmarkIcon} from "../../icon";
import Checkbox from "../checkbox";
import RadioItem from "../radio-item";

const ListItem: FC<ListItemProps> = ({
  children,
  tooltip,
  onClick,
  style,
  className,
  size = 'md',
  border = false,
  active = false,
  activeStyle = 'filled',
  hoverStyle = 'filled',
  theme,
}) => {
  return (
    <div
      className={
        classNames(
          'alamoma-list-item',
          size,
          `active-${activeStyle}`,
          `hover-${hoverStyle}`,
          {
            border: border,
            active: active,
          },
          className
        )
      }
      onClick={onClick}
      title={tooltip}
      style={style}
      data-theme={theme}
    >
      {activeStyle === 'filled' && (
        <div className="content">
          {children}
        </div>
      )}
      {activeStyle === 'outlined' && (
        <div className="content">
        {children}
        </div>
      )}
      {activeStyle === 'checkmark' && (
        <>
          <div className="checkmark-container">
            {active && <CheckmarkIcon size={size}/>}
          </div>
          <div className="content">
            {children}
          </div>
        </>
      )}
      {activeStyle === 'checkbox' && (
        <>
          <Checkbox
            value={active}
            size={size}
            theme={theme}
            style={{ overflow: 'hidden' }}
          >
            <div className="content">
              {children}
            </div>
          </Checkbox>
        </>
      )}
      {activeStyle === 'radio' && (
        <>
          <RadioItem
            active={active}
            size={size}
            theme={theme}
            style={{ overflow: 'hidden' }}
          >
            <div className="content">
              {children}
            </div>
          </RadioItem>
        </>
      )}
    </div>
  )
}

export default ListItem
