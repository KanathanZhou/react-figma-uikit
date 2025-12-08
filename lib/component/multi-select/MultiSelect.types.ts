import {CSSProperties, Dispatch, SetStateAction} from "react";
import {SelectOption} from "../../model";
import {ListItemActiveStyle, ListItemHoverStyle} from "../list-item/ListItem.types";

export type MultiSelectUIStyle = 'flat' | 'outlined' | 'hover-outlined' | 'hidden-arrow'
export type MultiSelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export interface MultiSelectProps {
  showArrow?: boolean
  placeholder?: string
  uiStyle?: MultiSelectUIStyle
  floatingOffset?: number
  maxWidth?: string | number
  maxHeight?: string | number
  options: SelectOption[]
  value?: any[]
  setValue?: Dispatch<SetStateAction<any[]>>
  onChange?: (options: SelectOption[]) => void
  allowCustomOption?: boolean
  onChangeCustomOptionValue?: (value: string) => void
  customOptionPlaceholder?: string
  zIndex?: number
  style?: CSSProperties
  className?: string
  size?: MultiSelectSize
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
