import {AnchorHTMLAttributes, ReactNode} from "react";

export interface LinkageProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
  skin?: 'blue' | 'blue5' | 'red' | 'orange' | 'purple' | 'green'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  theme?: 'light' | 'dark'
}
