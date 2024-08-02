import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface ChipProps {
  children: ReactNode
  skin?: 'blue' | 'blue5' | 'red' | 'orange' | 'purple' | 'green'
  onClick?: MouseEventHandler<HTMLSpanElement>
  cornerRadius?: string
  style?: CSSProperties
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  border?: boolean
  active?: boolean
  uiStyle?: 'filled' | 'outlined'
  theme?: 'light' | 'dark'
}
