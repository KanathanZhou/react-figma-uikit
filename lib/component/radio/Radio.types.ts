import {CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction} from "react";
import {RadioOption} from "../../model";

export interface RadioProps {
  options: RadioOption[]
  value?: any
  setValue?: Dispatch<SetStateAction<any>> // any suppose to be string | number, but it has compiling error
  onChange?: (radioOption: RadioOption) => void
  style?: CSSProperties
  className?: string
  direction?: 'horizontal' | 'vertical'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  theme?: 'light' | 'dark'
  // temporary solution for stopping the propagation on radio item click event
  stopPropagation?: boolean
}
