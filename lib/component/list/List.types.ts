import React, {CSSProperties, Dispatch, ReactNode, SetStateAction} from "react";

export interface ListProps {
  header?: string
  children: ReactNode
  collapsable?: boolean
  show?: boolean
  setShow?: Dispatch<SetStateAction<boolean>>
  style?: CSSProperties
  className?: string
  headerStyle?: CSSProperties
  headerClassName?: string
}
