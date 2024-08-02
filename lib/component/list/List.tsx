import React, {FC, useState} from "react";
import {ListProps} from "./List.types";
import './List.css'
import {ArrowDownIcon, ArrowForwardIcon} from "../../icon";
import classNames from "classnames";

const List: FC<ListProps> = ({
    children,
    header,
    collapsable = false,
    show = true,
    setShow,
    style,
    className,
    headerStyle,
    headerClassName
}) => {
  return (
      <div
          className={classNames('alamoma-list', className)}
          style={style}
      >
        {header && (
            <div
                className={classNames('header', headerClassName)}
                style={headerStyle}
                onClick={() => {
                  if (collapsable) {
                    setShow?.(!show)
                  }
                }}
            >
              <div className="collapse-view">
                <>
                  {collapsable && (
                      <>{show ? <ArrowDownIcon /> : <ArrowForwardIcon />}</>
                  )}
                </>
              </div>

              <div>{header}</div>
            </div>
        )}

        {header ? (
            <>
              {show && <>{children}</>}
            </>
        ) : (
            <>{children}</>
        )}
      </div>
  )
}

export default List
