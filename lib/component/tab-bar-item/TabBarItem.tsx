import React, {FC, useCallback} from "react";
import {TabBarItemProps} from "./TabBarItem.types";
import classNames from "classnames";
import './TabBarItem.css'
import './TabBarItem.size.css'
import './TabBarItem.chip.css'
import './TabBarItem.bar.css'
import './TabBarItem.manta.css'
import './TabBarItem.outlined.css'
import './TabBarItem.text.css'
import Chip from "../chip";

const TabBarItem: FC<TabBarItemProps> = ({
  children,
  onClick,
  style,
  className,
  size = 'md',
  active = false,
  theme,
  uiStyle = 'text',
}) => {
  return (
    <div
      className={
        classNames('alamoma-tab-bar-item', size, uiStyle, {
          active: active,
        }, className)
      }
      style={style}
      data-theme={theme}
      onClick={onClick}
    >
      {uiStyle === 'chip' ? (
        <Chip
          active={active}
          uiStyle="filled"
          size={size}
          theme={theme}
        >
          {children}
        </Chip>
      ) : (
        <>{children}</>
      )}
    </div>
  )

}

export default TabBarItem
