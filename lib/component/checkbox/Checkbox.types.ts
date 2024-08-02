import {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";

export interface CheckboxProps {
  children: ReactNode
  value: boolean
  setValue?: Dispatch<SetStateAction<boolean>>
  onChange?: (checked: boolean) => void
  skin?: 'blue' | 'red' | 'orange' | 'purple' | 'green'
  style?: CSSProperties
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  theme?: 'light' | 'dark'
  // temporary solution for stopping the propagation on checkbox click event
  stopPropagation?: boolean
}
