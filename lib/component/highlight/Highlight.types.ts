import {CSSProperties, ReactNode} from "react";

export interface HighlightProps {
  children: ReactNode
  title?: string
  onClickCopy?: () => void
  onCopied?: () => void // only works when onClickCopy is not specified
  onCopyFailed?: (reason: string) => void // only works when onClickCopy is not specified
  style?: CSSProperties
  className?: string
}
