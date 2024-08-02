import {CSSProperties, ReactNode} from "react";

export interface AlertProps {
  children?: ReactNode
  mode?: 'info' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  theme?: 'light' | 'dark'
  style?: CSSProperties
  className?: string
  cornerRadius?: string
}
