import {CSSProperties} from "react";

export interface StepperProps {
  step: number
  gap?: number | string
  steps: string[]
  style?: CSSProperties
  className?: string
  theme?: 'light' | 'dark'
}
