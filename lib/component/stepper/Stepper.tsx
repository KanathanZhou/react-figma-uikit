import React, {FC, useMemo} from "react";
import {StepperProps} from "./Stepper.types";
import './Stepper.css'
import classNames from "classnames";
import {CheckmarkIcon} from "../../icon";

// ⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ ㉑ ㉒ ㉓ ㉔ ㉕ ㉖ ㉗ ㉘ ㉙ ㉚ ㉛ ㉜ ㉝ ㉞ ㉟ ㊱ ㊲ ㊳ ㊴ ㊵ ㊶ ㊷ ㊸ ㊹ ㊺ ㊻ ㊼ ㊽ ㊾ ㊿
const CIRCLED_NUMBERS = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']

const Stepper: FC<StepperProps> = ({
  step,
  gap,
  steps,
  style,
  className,
  theme,
}) => {
  return (
    <div
      className={classNames('alamoma-stepper-bar', className)}
      style={{
        gap: gap,
        ...style
      }}
      data-theme={theme}
    >
      {steps.map((s, index) => {
        return (
          <div
            key={index}
            className={
              classNames('alamoma-stepper', {
                active: step === index,
                passed: step > index
              })
            }
          >
            <div className="step-breadcrumb">
              {step > index ? (
                <CheckmarkIcon size="xxl" fill="var(--alamoma-green-1)"/>
              ) : (
                <>{CIRCLED_NUMBERS[index] ?? index}</>
              )}
            </div>
            <div>{s}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Stepper