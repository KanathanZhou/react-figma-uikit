import {Highlight, Stepper, ToolBar} from "../../../lib";
import React from "react";

const StepperDoc = () => {
  return (
    <>
      <ToolBar title="Alert" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12
          }}>
            <Stepper
              step={2}
              steps={['Name your team', 'Add team members', 'Finish setup']}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<Stepper
  step="${2}"
  steps={['Name your team', 'Add team members', 'Finish setup']}
/>`}
            </Highlight>

            <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
            <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
          </div>
        </div>

{/*        <div style={{flex: 'none', width: 300, borderLeft: '1px solid var(--alamoma-black-5)', overflow: 'auto'}}>

        </div>*/}

      </div>
    </>
  )
}

export default StepperDoc