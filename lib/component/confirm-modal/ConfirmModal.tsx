import React, {FC} from 'react'
import Modal from "../modal";
import {ConfirmModalProps} from "./ConfirmModal.types";
import './ConfirmModal.css'
import IconButton from "../icon-button";
import Button from "../button";
import {CloseIcon} from "../../icon";

const ConfirmModal: FC<ConfirmModalProps> = ({
    children,
    open,
    setOpen,
    title,
    showClose = false,
    showConfirm = true,
    confirmText = 'Confirm',
    onConfirm,
    showCancel = true,
    cancelText = 'Cancel',
    onCancel,
    showDeleteConfirm = false,
    deleteConfirmText = 'Delete',
    onDeleteConfirm
}) => {
  return (
      <Modal
          open={open}
          setOpen={setOpen}
          clickOutsideToClose={false}
          width={300}
      >
        <div className="alamoma-confirm-modal">
          <div className="header">{title}</div>
          {showClose && (
              <div className="close-button">
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
          )}
          {children && <div className="content">{children}</div>}
          {(showCancel || showConfirm || showDeleteConfirm) && (
              <div className="action-bar">
                {showCancel && (
                    <Button
                        uiStyle="outlined"
                        onClick={(e) => {
                          if (onCancel) {
                            onCancel(e)
                          } else {
                            setOpen(false)
                          }
                        }}
                    >
                      {cancelText}
                    </Button>
                )}

                {showConfirm && (
                    <Button
                        skin="blue"
                        onClick={(e) => {
                          if (onConfirm) {
                            onConfirm(e)
                          } else {
                            setOpen(false)
                          }
                        }}
                    >
                      {confirmText}
                    </Button>
                )}

                {showDeleteConfirm && (
                    <Button
                        skin="red"
                        onClick={(e) => {
                          if (onDeleteConfirm) {
                            onDeleteConfirm(e)
                          } else {
                            setOpen(false)
                          }
                        }}
                    >
                      {deleteConfirmText}
                    </Button>
                )}

              </div>
          )}
        </div>
      </Modal>
  )
}

export default ConfirmModal