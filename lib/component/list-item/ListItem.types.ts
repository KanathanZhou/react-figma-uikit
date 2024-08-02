import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
export type ListItemActiveStyle = 'checkmark' | 'filled' | 'outlined' | 'checkbox' | 'radio'
export type ListItemHoverStyle = 'outlined' | 'filled'

export interface ListItemProps {
  children: ReactNode
  tooltip?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
  className?: string
  size?: ListItemSize
  border?: boolean
  active?: boolean
  activeStyle?: ListItemActiveStyle
  hoverStyle?: ListItemHoverStyle
  theme?: 'light' | 'dark'
}
