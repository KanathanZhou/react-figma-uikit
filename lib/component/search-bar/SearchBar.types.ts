import {CSSProperties, Dispatch, FormEventHandler, SetStateAction} from "react";

export type SearchBarUIStyle = 'flat' | 'outlined'
export type SearchBarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export interface SearchBarProps {
  value?: any
  setValue?: Dispatch<SetStateAction<any>>
  placeholder?: string
  onInput?: FormEventHandler<HTMLInputElement>
  size?: SearchBarSize
  backgroundColor?: string
  cornerRadius?: string
  style?: CSSProperties
  className?: string
  inputStyle?: CSSProperties
  inputClassName?: string
  theme?: 'light' | 'dark'
  uiStyle?: SearchBarUIStyle
  disabled?: boolean
  showFocusedBorder?: boolean
}
