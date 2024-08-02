import React, {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";

export interface ModalProps {
  children?: ReactNode
  open: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  clickOutsideToClose?: boolean
  width?: number | string
  height?: number | string
  style?: CSSProperties
  overlayStyle?: CSSProperties
}
