import React, {FC, useCallback, useEffect, useMemo, useRef, useState} from "react";
import './MultiSelect.css'
import './MultiSelect.size.css'
import './MultiSelect.flat.css'
import './MultiSelect.hidden-arrow.css'
import './MultiSelect.hover-outlined.css'
import './MultiSelect.outlined.css'
import {
  arrow,
  autoUpdate, flip, FloatingArrow, FloatingFocusManager,
  FloatingNode, FloatingPortal, offset, shift, size as floatingUISize,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions
} from "@floating-ui/react";
import ListItem from "../list-item";
import {MultiSelectProps} from "./MultiSelect.types";
import classNames from "classnames";
import {AddIcon, ArrowDropDownIcon} from "../../icon";
import Divider from "../divider";
import TextInput from "../text-input";
import {SelectOption} from "../../model";
import SearchBar from "../search-bar";
import IconButton from "../icon-button";

const ARROW_HEIGHT = 5.5
const GAP = 2

const MultiSelect: FC<MultiSelectProps> = ({
  showArrow,
  placeholder = 'Please select',
  uiStyle = 'flat',
  floatingOffset = 0,
  maxWidth,
  maxHeight = '360px',
  options = [],
  value,
  setValue,
  onChange,
  allowCustomOption,
  customOptionPlaceholder = 'Enter custom option',
  zIndex,
  style,
  className,
  size = 'md',
  allowTextFilter,
  textFilterPlaceholder = 'Search',
  prefix,
  cornerRadius,
  theme,
  activeStyle = 'checkmark',
  hoverStyle = 'filled',
  onChangeTextFilterValue,
  onChangeCustomOptionValue
}) => {
  const arrowRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const [customOptions, setCustomOptions] = useState<SelectOption[]>([])
  const [customOptionValue, setCustomOptionValue] = useState<string>('')
  const [textFilterValue, setTextFilterValue] = useState<string>('')

  const {x, y, strategy, refs, floatingStyles, context} = useFloating({
    placement: 'bottom-start',
    open: open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(showArrow ? ARROW_HEIGHT + GAP : floatingOffset),
      shift(),
      flip(),
      arrow({
        element: arrowRef,
      }),
      // TODO: The floating UI Size doesn't re-configure after changing the ui style
      floatingUISize({
        apply({rects, elements}) {
          switch (uiStyle) {
            case 'flat':
              Object.assign(elements.floating.style, {
                minWidth: '144px',
                maxWidth: maxWidth ?? '280px',
              })
              break
            default:
              if (maxWidth) {
                Object.assign(elements.floating.style, {
                  minWidth: `${rects.reference.width}px`,
                  maxWidth: maxWidth,
                })
              } else {
                Object.assign(elements.floating.style, {
                  width: `${rects.reference.width}px`,
                })
              }
              break
          }
        },
      }),
    ],
  })

  const nodeId = useFloatingNodeId()
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const {getReferenceProps, getFloatingProps} = useInteractions([click, dismiss])

  const selectOptions = useMemo(() => {
    return [...options, ...customOptions]
  }, [options, customOptions]);

  const selectedOptions = useMemo(() => {
    if (value) {
      return selectOptions.filter(op => value.includes(op.value))
    }
    return []
  }, [selectOptions, value])

  const showPlaceholder = useMemo(() => {
    return !value || !value.length
  }, [value])

  const displayLabel = useMemo(() => {
    if (showPlaceholder) {
      return placeholder
    }
    return selectedOptions.map(op => op.label).join(', ')
  }, [value, placeholder, selectedOptions])

  const tooltipLabel = useMemo(() => {
    return selectedOptions.map(op => op.label).join(', ')
  }, [selectedOptions])

  const filteredOptions = useMemo(() => {
    if (allowTextFilter && textFilterValue) {
      return selectOptions.filter(op => op.label.toLowerCase().includes(textFilterValue.toLowerCase()))
    }
    return selectOptions
  }, [allowTextFilter, textFilterValue, selectOptions])

  const onAddCustomOption = useCallback(() => {
    if (customOptionValue && customOptionValue.trim()) {
      if (!selectOptions.find(op => op.value === customOptionValue)) {
        setCustomOptions([...customOptions, {label: customOptionValue, value: customOptionValue}])
      }
      setCustomOptionValue('')
    }
  }, [customOptions, customOptionValue, selectOptions])

  return (
    <FloatingNode id={nodeId}>
      <div
        ref={refs.setReference}
        className={
          classNames('alamoma-multi-select', size, uiStyle, {
            highlight: open,
          }, className)
        }
        style={{
          borderRadius: cornerRadius,
          ...style,
        }}
        {...getReferenceProps()}
        data-theme={theme}
      >
        <div
          className={
            classNames('alamoma-multi-select-display', {
              placeholder: showPlaceholder
            })
          }
          title={tooltipLabel}
        >
          {!!prefix && <div className="alamoma-multi-select-prefix">{prefix}</div>}
          <div className="alamoma-multi-select-display-text">{displayLabel}</div>
        </div>
        <div
          className={
            classNames('alamoma-multi-select-arrow-container', {
              'hidden-arrow': uiStyle === 'hidden-arrow',
              highlight: open
            })
          }
        >
          <ArrowDropDownIcon size={size} />
        </div>
      </div>

      <FloatingPortal>
        {open && (
          <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
            <div
              ref={refs.setFloating}
              className="alamoma-multi-select-dropdown"
              style={{
                zIndex: zIndex,
                borderRadius: cornerRadius,
                ...floatingStyles
              }}
              {...getFloatingProps()}
              data-theme={theme}
            >
              {showArrow && (
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  fill="var(--alamoma-white-1)"
                  width={11}
                  height={5.5}
                />
              )}
              {allowTextFilter && (
                <>
                  <SearchBar
                    size={size}
                    cornerRadius="0"
                    backgroundColor="transparent"
                    value={textFilterValue}
                    placeholder={textFilterPlaceholder}
                    onInput={e => {
                      setTextFilterValue((e.target as any).value)
                      if (onChangeTextFilterValue) {
                        onChangeTextFilterValue((e.target as any).value)
                      }
                    }}
                  />
                  <Divider />
                </>
              )}
              <div
                className="dropdown-list"
                style={{
                  maxHeight: maxHeight,
                }}
              >
                {filteredOptions.map(op => {
                  return (
                    <ListItem
                      key={op.value}
                      activeStyle={activeStyle}
                      hoverStyle={hoverStyle}
                      size={size}
                      tooltip={op.label}
                      active={value?.includes(op.value)}
                      onClick={(e) => {
                        if (value) {
                          const changedOptions = [...selectedOptions]
                          const optionIndex = changedOptions.findIndex(changedOp => changedOp.value === op.value)
                          if (optionIndex === -1) {
                            changedOptions.push(op)
                          } else {
                            changedOptions.splice(optionIndex, 1)
                          }

                          const changedValues = [...value]
                          const valueIndex = changedValues.findIndex(v => v === op.value)
                          if (valueIndex === -1) {
                            changedValues.push(op.value)
                          } else {
                            changedValues.splice(valueIndex, 1)
                          }

                          if (onChange) {
                            onChange(changedOptions)
                          } else {
                            if (setValue) {
                              setValue(changedValues)
                            }
                          }
                        } else {
                          if (onChange) {
                            onChange([op])
                          } else {
                            if (setValue) {
                              setValue([op.value])
                            }
                          }
                        }
                      }}
                    >
                      {op.label}
                    </ListItem>
                  )
                })}
              </div>
              {allowCustomOption && (
                <>
                  <Divider/>
                  <div style={{height: '40px', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '8px'}}>
                    <TextInput
                      placeholder={customOptionPlaceholder}
                      value={customOptionValue}
                      backgroundColor="transparent"
                      style={{ flex: 1 }}
                      onInput={e => {
                        setCustomOptionValue((e.target as any).value)
                        if (onChangeCustomOptionValue) {
                          onChangeCustomOptionValue((e.target as any).value)
                        }
                      }}
                    />
                    <IconButton onClick={onAddCustomOption}>
                      <AddIcon size="md"/>
                    </IconButton>
                  </div>
                </>
              )}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </FloatingNode>
  )
}

export default MultiSelect
