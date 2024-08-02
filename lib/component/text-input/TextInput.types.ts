import {
  CSSProperties,
  Dispatch,
  FormEventHandler,
  SetStateAction
} from "react";

export type TextInputUIStyle = 'outlined' | 'flat' | 'hover-outlined' | 'embed'
export type TextInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export interface TextInputProps {
  value?: any
  setValue?: Dispatch<SetStateAction<any>>
  placeholder?: string
  onInput?: FormEventHandler<HTMLInputElement>
  disabled?: boolean
  style?: CSSProperties
  type?: 'text' | 'password' | 'number'
  uiStyle?: TextInputUIStyle
  theme?: 'light' | 'dark'
  size?: TextInputSize
  backgroundColor?: string
  cornerRadius?: string
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  prefix?: string
  className?: string
  autoComplete?: string;
}
