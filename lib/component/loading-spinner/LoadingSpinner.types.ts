import {CSSProperties} from "react";

export interface LoadingSpinnerProps {
  size?: 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  skin?: 'blue' | 'red' | 'orange' | 'purple' | 'green'
  theme?: 'light' | 'dark'
  style?: CSSProperties
  className?: string
}
