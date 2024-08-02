import {ReactNode} from "react";

export const findProperty = (obj: any, keysArray: string[]): any => {
  if (keysArray.length) {
    const k = keysArray.shift() as string
    if (k in obj) {
      return findProperty(obj[k], keysArray)
    }
    return undefined
  } else {
    return obj
  }
}

export interface TableColumn {
  title: ReactNode
  dataIndex: string // deep select using 'dot' notation like: 'student.name'
  render?: (data: any, record: any, index: number) => ReactNode
  width: number | string
}

export interface TableProps {
  columns: TableColumn[]
  dataSource: any[]
}
