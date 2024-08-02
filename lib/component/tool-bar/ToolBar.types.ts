import {CSSProperties, ReactNode} from "react";

export interface ToolBarProps {
  children?: ReactNode
  title?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  style?: CSSProperties
  className?: string
  contentStyle?: CSSProperties
  contentClassName?: string
  showBottomBorder?: boolean
  showClose?: boolean
  onClose?: () => void
  theme?: 'light' | 'dark'
}
