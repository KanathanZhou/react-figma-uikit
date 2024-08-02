import React, {useState} from "react"
import {Checkbox, Divider, Highlight, ListItem, Radio, Select, TextInput, ToolBar} from "../../../lib";
import {
  ListItemActiveStyle,
  ListItemHoverStyle,
  ListItemProps,
  ListItemSize
} from "../../../lib/component/list-item/ListItem.types";

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

const THEME_OPTIONS = [
  { label: 'light', value: 'light' },
  { label: 'dark', value: 'dark' },
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

const ListItemDoc = () => {
  const [activeStyle, setActiveStyle] = useState<ListItemActiveStyle>('checkmark')
  const [hoverStyle, setHoverStyle] = useState<ListItemHoverStyle>('outlined')
  const [size, setSize] = useState<ListItemSize>('md')
  const [border, setBorder] = useState(false)
  const [active, setActive] = useState(false)
  const [theme, setTheme] = useState<ListItemProps['theme']>('light')

  return (
    <>
      <ToolBar title="List item" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ListItem
              size={size}
              border={border}
              active={active}
              activeStyle={activeStyle}
              hoverStyle={hoverStyle}
              theme={theme}
            >
              Hello, I am a list item!
            </ListItem>
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
{`<ListItem
  size="${size}"
  border={${border}}
  active={${active}}
  activeStyle="${activeStyle}"
  hoverStyle="${hoverStyle}"
  theme="${theme}"
>
  Hello, I am a list item!
</ListItem>`}
            </Highlight>

            <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
            <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
          </div>
        </div>

        <div style={{flex: 'none', width: 300, borderLeft: '1px solid var(--alamoma-black-5)', overflow: 'auto'}}>
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

          <ToolBar size="xl" title="Styling" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px 12px 20px'}}>
            <Checkbox value={active} setValue={setActive}>Active</Checkbox>
          </div>
          <div style={{padding: '0 20px 12px 20px'}}>
            <Checkbox value={border} setValue={setBorder}>Border</Checkbox>
          </div>

        </div>

      </div>
    </>
  )
}

export default ListItemDoc
