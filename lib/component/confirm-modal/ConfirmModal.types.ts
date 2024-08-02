import React, {Dispatch, MouseEventHandler, ReactNode, SetStateAction} from "react";

export interface ConfirmModalProps {
  children?: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title: string
  showClose?: boolean
  showCancel?: boolean
  cancelText?: string
  onCancel?: MouseEventHandler<HTMLButtonElement>
  showConfirm?: boolean
  confirmText?: string
  onConfirm?: MouseEventHandler<HTMLButtonElement>
  showDeleteConfirm?: boolean
  deleteConfirmText?: string
  onDeleteConfirm?: MouseEventHandler<HTMLButtonElement>
}
