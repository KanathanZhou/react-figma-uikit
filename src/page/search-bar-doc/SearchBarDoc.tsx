import React, {useState} from "react";
import {Checkbox, Divider, Highlight, Radio, SearchBar, TextInput, ToolBar} from "../../../lib";
import {SearchBarProps, SearchBarUIStyle} from "../../../lib/component/search-bar/SearchBar.types";

const THEME_OPTIONS = [
  {label: 'light', value: 'light'},
  {label: 'dark', value: 'dark'},
]

const UI_STYLE_OPTIONS: { label: SearchBarUIStyle, value: SearchBarUIStyle}[] = [
  {label: 'outlined', value: 'outlined'},
  {label: 'flat', value: 'flat'},
]

const SIZE_OPTIONS = [
  {label: 'xs', value: 'xs'},
  {label: 'sm', value: 'sm'},
  {label: 'md', value: 'md'},
  {label: 'lg', value: 'lg'},
  {label: 'xl', value: 'xl'},
  {label: 'xxl', value: 'xxl'},
  {label: 'xxxl', value: 'xxxl'},
]

const SearchBarDoc = () => {
  const [size, setSize] = useState<SearchBarProps['size']>('md')
  const [theme, setTheme] = useState<SearchBarProps['theme']>('light')
  const [uiStyle, setUiStyle] = useState<SearchBarProps['uiStyle']>('flat')
  const [disable, setDisable] = useState(false)
  const [showFocusedBorder, setShowFocusedBorder] = useState(false)

  return (
    <>
      <ToolBar title="Search bar" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SearchBar
              placeholder="Search anything here"
              size={size}
              theme={theme}
              uiStyle={uiStyle}
              disabled={disable}
              showFocusedBorder={showFocusedBorder}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<SearchBar
  placeholder="Search anything here"
  size="${size}"
  theme="${theme}"
  uiStyle="${uiStyle}"
  disabled={${disable}}
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
            <Checkbox value={disable} setValue={setDisable}>Disable</Checkbox>
          </div>

          <div style={{padding: '0 20px 12px 20px'}}>
            <Checkbox value={showFocusedBorder} setValue={setShowFocusedBorder}>Show focused border</Checkbox>
          </div>

        </div>

      </div>
    </>
  )
}

export default SearchBarDoc