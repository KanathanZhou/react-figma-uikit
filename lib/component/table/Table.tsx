import React, {FC} from "react"
import {findProperty, TableProps} from "./Table.types";
import './Table.css'

const Table: FC<TableProps> = ({
    columns,
    dataSource
}) => {
  return (
      <div className="alamoma-table">
        <div className="alamoma-table-row alamoma-table-header-row">
          {columns.map((col, colIndex) => {
            return (
                <div
                    key={colIndex}
                    className="alamoma-table-cell alamoma-header-cell"
                    style={{ width: col.width }}
                >
                  <div className="default-cell">
                    {col.title}
                  </div>
                </div>
            )
          })}
        </div>
        {dataSource.map((row, rowIndex) => {
          return (
              <div key={rowIndex} className="alamoma-table-row">
                {columns.map((col, colIndex) => {
                  return (
                      <div
                          key={colIndex}
                          className="alamoma-table-cell"
                          style={{ width: col.width }}
                      >
                        {col.render ? (
                            <>{col.render(findProperty(row, col.dataIndex.split('.')), row, rowIndex)}</>
                        ) : (
                            <div className="default-cell">
                              {findProperty(row, col.dataIndex.split('.'))}
                            </div>
                        )}
                      </div>
                  )
                })}
              </div>
          )
        })}
      </div>
  )
}

export default Table