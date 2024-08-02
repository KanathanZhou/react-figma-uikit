import {ChangeEventHandler, CSSProperties, Dispatch, SetStateAction} from "react";

export interface TextAreaProps {
  value?: any
  setValue?: Dispatch<SetStateAction<any>>
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  disabled?: boolean
  style?: CSSProperties
  className?: string
  uiStyle?: 'outlined' | 'flat'
  theme?: 'light' | 'dark'
  backgroundColor?: string
  cornerRadius?: string
  rows?: number
  cols?: number
  minLength?: number
  maxLength?: number
  resizable?: boolean
  autoComplete?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}
