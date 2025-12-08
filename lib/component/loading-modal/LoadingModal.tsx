import React, {FC} from "react";
import {LoadingModalProps} from "./LoadingModal.types";
import './LoadingModal.css'
import Modal from "../modal";
import Button from "../button";

const LoadingModal: FC<LoadingModalProps> = ({
    children,
    open,
    setOpen,
    showCancel = false,
    cancelText = 'Cancel',
    onCancel,
    style,
    overlayStyle,
}) => {
  return (
      <Modal
          open={open}
          setOpen={setOpen}
          clickOutsideToClose={false}
          overlayStyle={overlayStyle}
          style={style}
      >
        <div className="alamoma-loading-modal">
          <div className="alamoma-loader-container">
            <div className="alamoma-loader">
              <span />
            </div>
          </div>
          {children && <div className="content">{children}</div>}
          {showCancel && (
              <div className="action-bar">
                <Button
                    uiStyle="outlined"
                    onClick={(e) => {
                      if (onCancel) {
                        onCancel(e)
                      } else {
                        setOpen?.(false)
                      }
                    }}
                >
                  {cancelText}
                </Button>
              </div>
          )}
        </div>
      </Modal>
  )
}

export default LoadingModal
