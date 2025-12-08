import {CSSProperties, Dispatch, SetStateAction} from "react";
import {SelectOption} from "../../model";
import {ListItemActiveStyle, ListItemHoverStyle} from "../list-item/ListItem.types";

export type SelectUIStyle = 'flat' | 'outlined' | 'hover-outlined' | 'hidden-arrow'
export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export interface SelectProps {
  showArrow?: boolean
  placeholder?: string
  uiStyle?: SelectUIStyle
  floatingOffset?: number
  maxWidth?: string | number
  maxHeight?: string | number
  options: SelectOption[]
  value?: any
  setValue?: Dispatch<SetStateAction<any>>
  onChange?: (option: SelectOption) => void
  allowCustomOption?: boolean
  onChangeCustomOptionValue?: (value: string) => void
  customOptionPlaceholder?: string
  zIndex?: number
  style?: CSSProperties
  className?: string
  size?: SelectSize
  allowTextFilter?: boolean
  textFilterPlaceholder?: string
  prefix?: string
  cornerRadius?: string | number
  theme?: 'light' | 'dark'
  activeStyle?: ListItemActiveStyle
  hoverStyle?: ListItemHoverStyle
  onChangeTextFilterValue?: (value: string) => void
  dropdownStyle?: CSSProperties
}
