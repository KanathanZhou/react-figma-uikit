import {CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction} from "react";

export interface FeedbackModalProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  description?: string
  rate?: number
  setRate?: Dispatch<SetStateAction<number>>
  reason?: any
  setReason?: Dispatch<SetStateAction<any>>
  onSubmit?: () => void
  onCancel?: () => void
  className?: string
  style?: CSSProperties
  locale?: 'zhCN' | 'enUS'
}
