import {MouseEventHandler} from "react";

export interface UIImage {
  src: string
  width?: number
  height?: number
}

export interface UICoverImage extends UIImage {
  borderRadius?: string
  border?: boolean
  hoverEffect?: 'zoom-in' | 'zoom-out'
  onClick?: MouseEventHandler<HTMLImageElement>
}

export interface Option {
  label: string
  value: string | number
  [key: string]: any
}

export interface TabOption {
  label: string
  value: any
  [key: string]: any
}

export interface SelectOption {
  label: string
  value: any
  [key: string]: any
}

export interface RadioOption {
  label: string
  value: any
  [key: string]: any
}

export interface MenuOption {
  label: string
  onClick?: MouseEventHandler<HTMLDivElement>
  divider?: boolean
}

export enum ModuleLogicFlowTypes {
  TIMER_EXEC = 'TIMER_EXEC',
  EVENT_EXEC = 'EVENT_EXEC',
  SUSCRIBE_DE_SERIAL = 'SUSCRIBE_DE_SERIAL',
  PUBLISH_DE_SERIAL = 'PUBLISH_DE_SERIAL',
  DTE_REC_CALLBACK = 'DTE_REC_CALLBACK',
  CLIENT_REQUEST_EXEC = 'CLIENT_REQUEST_EXEC'
}

export const SRC_BASE_URL = 'https://inceptio-infra-cloudinfra.oss-cn-hangzhou.aliyuncs.com/fronto-static'
export const EVENT_ICON_URL = `${SRC_BASE_URL}/icon/activity/activity-white.svg`
export const SUBSCRIPTION_ICON_URL = `${SRC_BASE_URL}/icon/subscribe-message/subscribe-message-white.svg`
export const TIMER_ICON_URL = `${SRC_BASE_URL}/icon/clock/clock-white.svg`
export const PUBLISHER_ICON_URL = `${SRC_BASE_URL}/icon/export/export-white.svg`
export const DTE_ICON_URL = `${SRC_BASE_URL}/icon/code-file/code-file-white.svg`
export const REQUEST_ICON_URL = `${SRC_BASE_URL}/icon/log-in/login-white.svg`

export const LOGO_URL = `${SRC_BASE_URL}/logo/logo-cn-3.svg`
export const LOGO_SIDE_MENU_URL = `${SRC_BASE_URL}/logo/logo-cn-1.svg`
export const COMMUNITY_ICON_URL = `${SRC_BASE_URL}/icon/global/global-white.svg`
export const BELL_ICON_URL = `${SRC_BASE_URL}/icon/bell/bell-white.svg`
export const SEARCH_ICON_URL = `${SRC_BASE_URL}/icon/search/search-white.svg`
export const MESSAGE_ICON_URL = `${SRC_BASE_URL}/icon/message/message-white.svg`

export const MODULE_LOGIC_FLOW_ICON_MAPPING = {
  [ModuleLogicFlowTypes.SUSCRIBE_DE_SERIAL]: SUBSCRIPTION_ICON_URL,
  [ModuleLogicFlowTypes.DTE_REC_CALLBACK]: DTE_ICON_URL,
  [ModuleLogicFlowTypes.EVENT_EXEC]: EVENT_ICON_URL,
  [ModuleLogicFlowTypes.PUBLISH_DE_SERIAL]: PUBLISHER_ICON_URL,
  [ModuleLogicFlowTypes.CLIENT_REQUEST_EXEC]: REQUEST_ICON_URL,
  [ModuleLogicFlowTypes.TIMER_EXEC]: TIMER_ICON_URL,
}
