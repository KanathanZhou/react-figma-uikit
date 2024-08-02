import {ReactNode} from "react";
import {UICoverImage} from "../../model";
export interface CardProps {
  children?: ReactNode
  coverImage?: UICoverImage
  title?: string
  subTitle?: string
  header?: ReactNode
  footer?: ReactNode
}
