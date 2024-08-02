import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface TabBarItemProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  active?: boolean
  theme?: 'light' | 'dark'
  uiStyle?: 'text' | 'bar' | 'manta' | 'outlined' | 'chip'
}
