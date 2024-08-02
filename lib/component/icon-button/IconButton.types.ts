import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface IconButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: CSSProperties
  className?: string
  title?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  cornerRadius?: string
  theme?: 'light' | 'dark'
}
