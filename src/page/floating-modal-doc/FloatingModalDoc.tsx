import {
  FloatingModal,
  IconButton,
  OpenInTabIcon,
  ResizeToFitIcon,
  ResizeToFullIcon, StopIcon,
  ToolBar, UnionIcon
} from "../../../lib";
import React, {useState} from "react";

const FloatingModalDoc = () => {
  const [open, setOpen] = useState(true)

  return (
      <>
        <ToolBar size="xxxl" title="Floating Modal" />

        <IconButton>
          <ResizeToFitIcon />
        </IconButton>

        <IconButton>
          <ResizeToFullIcon />
        </IconButton>

        <IconButton>
          <OpenInTabIcon />
        </IconButton>

        <IconButton title="12312">
          <StopIcon />
        </IconButton>

        <IconButton title="12312" size="xs">
          <UnionIcon />
        </IconButton>

        <FloatingModal
            open={open}
            setOpen={setOpen}
            style={{ top: 120, left: 320 }}
            width={520}
            height={520}
            border
            dropShadow
        >
          <ToolBar size="xxl" title="Floating view" />
          <div>
            dadsa
          </div>
        </FloatingModal>
      </>
  )
}

export default FloatingModalDoc
