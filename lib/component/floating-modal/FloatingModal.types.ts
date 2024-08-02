import {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";

export interface FloatingModalProps {
  children?: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
  style?: CSSProperties
  width?: number | string
  height?: number | string
  border?: boolean
  dropShadow?: boolean
}
