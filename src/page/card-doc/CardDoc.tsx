import React, {useState} from "react"
import {Button, Card, Modal, Select, ToolBar} from "../../../lib";

const OPTIONS = [
  { label: '123', value: '123' },
  { label: '321', value: '321' },
]

const CardDoc = () => {
  const [open, setOpen] = useState(false)
  const [openSelect, setOpenSelect] = useState(false)

  return (
      <>
        <ToolBar title="Card" size="xxxl" />
        <Card>dsadas</Card>

        <Button skin="blue" onClick={() => setOpen(true)}>open modal</Button>

        <Modal
          open={open}
          setOpen={setOpen}
          width={520}
          height={400}
        >
          <div style={{ padding: '24px' }}>
            <Select
              open={openSelect}
              setOpen={setOpenSelect}
              options={OPTIONS}
              uiStyle="border"
            />
          </div>
        </Modal>
      </>
  )
}

export default CardDoc
