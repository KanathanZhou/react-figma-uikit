import React, {useState} from "react"
import {Checkbox, Divider, Highlight, MultiSelect, Radio, SelectOption, TextInput, ToolBar} from "../../../lib";
import {MultiSelectProps, MultiSelectUIStyle} from "../../../lib/component/multi-select/MultiSelect.types";
import {SelectProps} from "../../../lib/component/select/Select.types";
import {ListItemActiveStyle, ListItemHoverStyle} from "../../../lib/component/list-item/ListItem.types";

export const DEVICE_OPTIONS: SelectOption[] = [
  { value: 'linux', label: 'Ubuntu' },
  { value: 'darwin', label: 'Mac' },
  { value: 'iox', label: 'iPhone' },
  { value: 'android', label: 'Android X' },
  { value: 'windows', label: 'Windows 2023' },
]

const ACTIVE_STYLE_OPTIONS: { label: ListItemActiveStyle, value: ListItemActiveStyle}[] = [
  { label: 'checkmark', value: 'checkmark' },
  { label: 'filled', value: 'filled' },
  { label: 'outlined', value: 'outlined' },
  { label: 'checkbox', value: 'checkbox' },
  { label: 'radio', value: 'radio' },
]

const HOVER_STYLE_OPTIONS: { label: ListItemHoverStyle, value: ListItemHoverStyle}[] = [
  { label: 'outlined', value: 'outlined' },
  { label: 'filled', value: 'filled' },
]

const SIZE_OPTIONS = [
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
  { label: 'xl', value: 'xl' },
  { label: 'xxl', value: 'xxl' },
  { label: 'xxxl', value: 'xxxl' },
]

const UI_STYLE_OPTIONS: { label: MultiSelectUIStyle, value: MultiSelectUIStyle}[] = [
  { label: 'flat', value: 'flat' },
  { label: 'outlined', value: 'outlined' },
  { label: 'hidden-arrow', value: 'hidden-arrow' },
  { label: 'hover-outlined', value: 'hover-outlined' },
]

const THEME_OPTIONS = [
  { label: 'light', value: 'light' },
  { label: 'dark', value: 'dark' },
]

const MultiSelectDoc = () => {
  const [value, setValue] = useState([DEVICE_OPTIONS[0].value])
  const [uiStyle, setUiStyle] = useState<MultiSelectUIStyle>('outlined')
  const [size, setSize] = useState('md')
  const [showArrow, setShowArrow] = useState(false)
  const [floatingOffset, setFloatingOffset] = useState(0)
  const [allowCustomOption, setAllowCustomOption] = useState(false)
  const [allowTextFilter, setAllowTextFilter] = useState(false)
  const [prefix, setPrefix] = useState('')
  const [theme, setTheme] = useState<SelectProps['theme']>('light')
  const [activeStyle, setActiveStyle] = useState<ListItemActiveStyle>('checkmark')
  const [hoverStyle, setHoverStyle] = useState<ListItemHoverStyle>('outlined')

  return (
    <>
      <ToolBar title="Multi Select" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MultiSelect
              showArrow={showArrow}
              floatingOffset={+floatingOffset}
              options={DEVICE_OPTIONS}
              value={value}
              setValue={setValue}
              uiStyle={uiStyle as MultiSelectProps['uiStyle']}
              prefix={prefix}
              size={size as MultiSelectProps['size']}
              allowCustomOption={allowCustomOption}
              allowTextFilter={allowTextFilter}
              style={{width: 240}}
              cornerRadius={4}
              theme={theme}
              activeStyle={activeStyle}
              hoverStyle={hoverStyle}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<MultiSelect
  showArrow={${showArrow}}
  floatingOffset={${floatingOffset}}
  options={${JSON.stringify(DEVICE_OPTIONS)}}
  value={value}
  setValue={setValue}
  uiStyle="${uiStyle}"
  prefix="${prefix}"
  size="${size}"
  allowCustomOption={${allowCustomOption}}
  allowTextFilter={${allowTextFilter}}
  style={{width: 240}}
  theme="${theme}"
  activeStyle="${activeStyle}"
  hoverStyle="${hoverStyle}"
/>`}
            </Highlight>

            <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
            <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
          </div>
        </div>

        <div style={{flex: 'none', width: 300, borderLeft: '1px solid var(--alamoma-black-5)', overflow: 'auto'}}>
          <ToolBar size="xl" title="UI Style" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={UI_STYLE_OPTIONS} value={uiStyle} setValue={setUiStyle} direction="horizontal"/>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Active style" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={ACTIVE_STYLE_OPTIONS} value={activeStyle} setValue={setActiveStyle} direction="horizontal"/>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Hover style" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={HOVER_STYLE_OPTIONS} value={hoverStyle} setValue={setHoverStyle} direction="horizontal"/>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Theme" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={THEME_OPTIONS} value={theme} setValue={setTheme} direction="horizontal"/>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Size" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={SIZE_OPTIONS} value={size} setValue={setSize} direction="horizontal"/>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Arrow" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Checkbox value={showArrow} setValue={setShowArrow}>Enable</Checkbox>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Custom option" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Checkbox value={allowCustomOption} setValue={setAllowCustomOption}>Enable</Checkbox>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Text filter" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Checkbox value={allowTextFilter} setValue={setAllowTextFilter}>Enable</Checkbox>
          </div>

          <Divider top={20} bottom={6}/>

          <ToolBar size="xl" title="Styling" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <TextInput
              size="sm"
              type="number"
              value={floatingOffset}
              setValue={setFloatingOffset}
              prefix="Floating offset"
            />
            <div style={{fontSize: 11, marginTop: 6}}>* Floating offset only takes effect when arrow is not showing
            </div>

            <TextInput
              size="sm"
              value={prefix}
              setValue={setPrefix}
              style={{marginTop: 24}}
              prefix="Prefix"
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default MultiSelectDoc