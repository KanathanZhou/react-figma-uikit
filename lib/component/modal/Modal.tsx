import React, {FC} from 'react'
import {ModalProps} from "./Modal.types";
import './Modal.css'
import {
  FloatingOverlay,
  useFloating,
  FloatingFocusManager,
  useDismiss,
  useRole,
  useInteractions
} from "@floating-ui/react";

const Modal: FC<ModalProps> = ({
  children,
  open,
  setOpen,
  clickOutsideToClose = true,
  width = 'max-content',
  height = 'max-content',
  style,
  overlayStyle,
}) => {
  const {refs, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
  })

  const dismiss = useDismiss(context, {
    enabled: clickOutsideToClose,
    // this will prevent click select to close modal inside
    outsidePress: (event) => {
      return (event.target as any).classList[0] === 'alamoma-modal-overlay'
    },
  })
  const role = useRole(context)

  const {getFloatingProps} = useInteractions([
    dismiss,
    role
  ])

  return (
      <>
        {open && (
            <FloatingOverlay
                lockScroll
                className="alamoma-modal-overlay"
                style={overlayStyle}
            >
              <FloatingFocusManager
                  context={context}
                  modal={true}
                  initialFocus={-1}
                  {...getFloatingProps()}
              >
                <div
                    ref={refs.setFloating}
                    className="alamoma-modal"
                    style={{
                      width: width,
                      height: height,
                      ...style
                    }}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingOverlay>
        )}
      </>
  )
}

export default Modal
