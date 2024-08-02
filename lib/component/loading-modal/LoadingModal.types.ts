import React, {CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction} from "react";

export interface LoadingModalProps {
  children?: ReactNode
  open: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  showCancel?: boolean
  cancelText?: string
  onCancel?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
  overlayStyle?: CSSProperties
}
