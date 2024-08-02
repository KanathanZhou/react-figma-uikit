import React, {FC, useCallback, useEffect, useMemo, useRef, useState} from "react";
import './Select.css'
import './Select.size.css'
import './Select.flat.css'
import './Select.hidden-arrow.css'
import './Select.hover-outlined.css'
import './Select.outlined.css'
import {SelectProps} from "./Select.types";
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
import classNames from "classnames";
import {AddIcon, ArrowDropDownIcon} from "../../icon";
import Divider from "../divider";
import TextInput from "../text-input";
import SearchBar from "../search-bar";
import {SelectOption} from "../../model";
import IconButton from "../icon-button";

const ARROW_HEIGHT = 5.5
const GAP = 2

const Select: FC<SelectProps> = ({
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
  onChangeCustomOptionValue,
  onChangeTextFilterValue,
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

  const selectedOption = useMemo(() => {
    return selectOptions.find(op => op.value === value)
  }, [selectOptions, value])

  const displayLabel = useMemo(() => {
    if (value === undefined || value === null) {
      return placeholder
    }
    if (selectedOption) {
      return selectedOption.label
    }
    return value
  }, [value, placeholder, selectedOption])

  const tooltipLabel = useMemo(() => {
    if (selectedOption) {
      return selectedOption.label
    }
    return value
  }, [value, selectedOption])

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
          classNames('alamoma-select', size, uiStyle, {
            highlight: open
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
            classNames('alamoma-select-display', {
              placeholder: value === null || value === undefined
            })
          }
          title={tooltipLabel}
        >
          {!!prefix && <div className="alamoma-select-prefix">{prefix}</div>}
          <div className="alamoma-select-display-text">{displayLabel}</div>
        </div>
        <div
          className={
            classNames('alamoma-select-arrow-container', {
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
              className="alamoma-select-dropdown"
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
                  <Divider/>
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
                      size={size}
                      activeStyle={activeStyle}
                      hoverStyle={hoverStyle}
                      tooltip={op.label}
                      active={op.value === value}
                      onClick={() => {
                        if (onChange) {
                          onChange(op)
                          setOpen(false)
                        } else {
                          if (setValue) {
                            setValue(op.value)
                            setOpen(false)
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
                  <Divider />
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
                      <AddIcon size="md" />
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

export default Select
