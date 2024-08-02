import React, {useState} from "react";
import {Checkbox, Divider, Highlight, Radio, TextInput, ToolBar} from "../../../lib";
import {TextInputProps, TextInputSize, TextInputUIStyle} from "../../../lib/component/text-input/TextInput.types";

const THEME_OPTIONS = [
  {label: 'light', value: 'light'},
  {label: 'dark', value: 'dark'},
]

const UI_STYLE_OPTIONS: { label: TextInputUIStyle, value: TextInputUIStyle }[] = [
  {label: 'outlined', value: 'outlined'},
  {label: 'flat', value: 'flat'},
  {label: 'hover-outlined', value: 'hover-outlined'},
  {label: 'embed', value: 'embed'},
]

const SIZE_OPTIONS: { label: TextInputSize, value: TextInputSize }[] = [
  {label: 'xs', value: 'xs'},
  {label: 'sm', value: 'sm'},
  {label: 'md', value: 'md'},
  {label: 'lg', value: 'lg'},
  {label: 'xl', value: 'xl'},
  {label: 'xxl', value: 'xxl'},
  {label: 'xxxl', value: 'xxxl'},
]

const TextInputDoc = () => {
  const [size, setSize] = useState<TextInputSize>('md')
  const [theme, setTheme] = useState<TextInputProps['theme']>('light')
  const [uiStyle, setUiStyle] = useState<TextInputUIStyle>('outlined')
  const [disable, setDisable] = useState(false)
  const [prefix, setPrefix] = useState('')

  return (
    <>
      <ToolBar title="Text input" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TextInput
              uiStyle={uiStyle}
              size={size}
              theme={theme}
              disabled={disable}
              placeholder="Please enter anything!"
              prefix={prefix}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<TextInput
  uiStyle="${uiStyle}"
  size="${size}"
  theme="${theme}"
  disabled={${disable}}
  placeholder="Please enter anything!"
  prefix="${prefix}"
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
          <div style={{padding: '0 20px'}}>
            <Checkbox value={disable} setValue={setDisable}>Disable</Checkbox>

            <TextInput
              size="sm"
              value={prefix}
              setValue={setPrefix}
              style={{marginTop: 12}}
              prefix="Prefix"
            />
          </div>

        </div>

      </div>
    </>
  )
}

export default TextInputDoc