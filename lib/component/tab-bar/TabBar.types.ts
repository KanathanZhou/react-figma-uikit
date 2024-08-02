import {CSSProperties, Dispatch, SetStateAction} from "react";
import {TabOption} from "../../model";
import {TabBarItemProps} from "../tab-bar-item/TabBarItem.types";

export interface TabBarProps {
  value?: any
  setValue?: Dispatch<SetStateAction<any>> // any suppose to be string | number, but it has compiling error
  options: TabOption[]
  onChange?: (tabOption: TabOption) => void
  uiStyle?: TabBarItemProps['uiStyle']
  style?: CSSProperties
  className?: string
  tabStyle?: CSSProperties
  tabClassName?: string
  theme?: 'light' | 'dark'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}
