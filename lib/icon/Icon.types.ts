import {MouseEventHandler} from "react";

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export type IconSizeMap = {
  [key in IconSize]: number
}

export interface IconProps {
  width?: number
  height?: number
  fill?: string
  opacity?: number
  size?: IconSize
  theme?: 'light' | 'dark'
  onClick?: MouseEventHandler<SVGSVGElement>
}
