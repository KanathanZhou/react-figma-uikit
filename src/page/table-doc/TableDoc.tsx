import React from "react"
import {Table} from "../../../lib";
import {TableColumn} from "../../../lib/component/table/Table.types";

const TABLE_HEADERS: TableColumn[] = [
  { title: 'Name', dataIndex: 'name', width: '200px' },
  { title: 'Age', dataIndex: 'age', width: '200px' },
  { title: 'Gender', dataIndex: 'gender', width: '200px' },
  { title: <div style={{ color: 'red' }}>Timestamp</div>, dataIndex: 'timestamp', width: '200px' },
  { title: 'Random', dataIndex: 'random', render: (_: any, record: any) => <div style={{ padding: '13px 0' }}>{record.name}</div>, width: '200px' },
]

const DATA_SOURCE = [
  { name: 'foo', age: 14, gender: 'male', timestamp: 1321312312, random: 1 },
  { name: 'dog', age: 20, gender: 'female', timestamp: 1321312312, random: 2 },
  { name: 'cat', age: 22, gender: 'female', timestamp: 132131231212, random: 3 },
  { name: 'lily', age: 30, gender: 'female', timestamp: 13213123125321, random: '4' },
]

const TableDoc = () => {
  return (
      <div>
        <Table
            columns={TABLE_HEADERS}
            dataSource={DATA_SOURCE}
        />
      </div>
  )
}

export default TableDoc