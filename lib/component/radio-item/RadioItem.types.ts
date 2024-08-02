import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface RadioItemProps {
  children: ReactNode
  tooltip?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  active?: boolean
  theme?: 'light' | 'dark'
  // temporary solution for stopping the propagation on radio item click event
  stopPropagation?: boolean
}
