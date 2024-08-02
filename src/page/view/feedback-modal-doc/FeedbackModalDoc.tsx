import React from "react";
import {useState} from "react";
import {FeedbackModal, ToolBar} from "../../../../lib";

const FeedbackModalDoc = () => {
  const [open, setOpen] = useState(true)
  const [rate, setRate] = useState(0)

  return (
      <>
        <ToolBar size="xxxl" title="Feedback modal" />

        <FeedbackModal open={open} setOpen={setOpen} rate={rate} setRate={setRate} locale="zhCN" />
      </>
  )
}

export default FeedbackModalDoc
