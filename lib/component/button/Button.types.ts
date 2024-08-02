import {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  uiStyle?: 'filled' | 'outlined' | 'flat' | 'text' | 'linkage'
  skin?: 'blue' | 'blue5' | 'red' | 'orange' | 'purple' | 'green'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  theme?: 'light' | 'dark'
}
