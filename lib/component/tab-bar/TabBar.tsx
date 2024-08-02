import React, {FC} from "react";
import './TabBar.css'
import './TabBar.bar.css'
import './TabBar.chip.css'
import './TabBar.manta.css'
import './TabBar.outlined.css'
import './TabBar.text.css'
import {TabBarProps} from "./TabBar.types";
import classNames from "classnames";
import {TabOption} from "../../model";
import TabBarItem from "../tab-bar-item";

const TabBar: FC<TabBarProps> = ({
  value,
  setValue,
  options,
  onChange,
  uiStyle = 'text',
  style,
  className,
  tabStyle,
  tabClassName,
  theme,
  size = 'md',
}) => {

  const onClickTab = (option: TabOption) => {
    if (option.value !== value) {
      if (onChange) {
        onChange(option)
      } else {
        setValue?.(option.value)
      }
    }
  }

  return (
    <div
      className={
        classNames('alamoma-tab-bar', uiStyle, className)
      }
      style={style}
      data-theme={theme}
    >
      {options.map(option => {
        return (
          <TabBarItem
            key={option.value}
            active={option.value === value}
            onClick={() => onClickTab(option)}
            uiStyle={uiStyle}
            theme={theme}
            size={size}
            style={tabStyle}
            className={tabClassName}
          >
            {option.label}
          </TabBarItem>
        )
      })}
    </div>
  )
}

export default TabBar
