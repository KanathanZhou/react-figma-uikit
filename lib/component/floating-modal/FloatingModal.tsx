import React, {FC} from "react";
import {FloatingModalProps} from "./FloatingModal.types";
import {autoUpdate, FloatingFocusManager, useFloating} from "@floating-ui/react";
import classNames from "classnames";
import './FloatingModal.css'

const FloatingModal: FC<FloatingModalProps> = ({
    children,
    open,
    setOpen,
    className,
    style,
    width,
    height,
    dropShadow = false,
    border = false
}) => {
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    strategy: 'fixed'
  })

  return (
      <>
        {open && (
            <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={-1}
            >
              <div
                  ref={refs.setFloating}
                  style={{
                    ...floatingStyles,
                    width,
                    height,
                    ...style,
                  }}
                  className={
                    classNames('alamoma-floating-modal', {
                      'drop-shadow': dropShadow,
                      'border': border
                    }, className)
                  }
              >
                <>{children}</>
              </div>
            </FloatingFocusManager>
        )}
      </>
  )
}

export default FloatingModal
