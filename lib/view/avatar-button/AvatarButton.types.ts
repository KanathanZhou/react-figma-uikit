import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface AvatarButtonProps {
  children?: ReactNode
  avatar?: ReactNode
  avatarLetter?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  showMore?: boolean
  style?: CSSProperties
  className?: string
  theme?: 'light' | 'dark'
}
