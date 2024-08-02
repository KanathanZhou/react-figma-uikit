import React, {FC, useCallback} from "react";
import {HighlightProps} from "./Highlight.types";
import './Highlight.css'
import Button from "../button";
import classNames from "classnames";

const Highlight: FC<HighlightProps> = ({
  children,
  title,
  onClickCopy,
  onCopied,
  onCopyFailed,
  style,
  className
}) => {
  const onCopy = useCallback(() => {
    if (onClickCopy) {
      onClickCopy()
    } else {
      if (typeof children === 'string') {
        navigator.clipboard.writeText(children).then(onCopied)
      } else {
        onCopyFailed?.('The content to copy is not a string')
      }
    }
  }, [onClickCopy, children, onCopied, onCopyFailed])

  return (
      <div
        className={classNames('alamoma-highlight-container', className)}
        style={style}
      >
        <div className="alamoma-highlight-title">
          {title}
        </div>
        <div className="alamoma-highlight-copy-slot">
          <Button uiStyle="text" skin="green" onClick={onCopy}>
            <span style={{ fontWeight: 500 }}>复制代码</span>
          </Button>
        </div>
        <div className="alamoma-highlight">
          <code className="alamoma-code">
            {children}
          </code>
        </div>
      </div>
  )
}

export default Highlight
