import {Divider, Highlight, Radio, TextArea, ToolBar} from "../../../lib";
import React, {useState} from "react";
import {AlertProps} from "../../../lib/component/alert/Alert.types";
import {TextAreaProps} from "../../../lib/component/text-area/TextArea.types";

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

const UI_STYLE_OPTIONS = [
  { label: 'outlined', value: 'outlined' },
  { label: 'flat', value: 'flat' },
]

const TextAreaDoc = () => {
  const [size, setSize] = useState<AlertProps['size']>('md')
  const [theme, setTheme] = useState<AlertProps['theme']>('light')
  const [uiStyle, setUiStyle] = useState<TextAreaProps['uiStyle']>('outlined')

  return (
    <>
      <ToolBar title="Alert" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12
          }}>
            <TextArea
              uiStyle={uiStyle}
              theme={theme}
              size={size}
              resizable
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<TextArea
  uiStyle="${uiStyle}"
  theme="${theme}"
  size="${size}"
  resizable
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

        </div>

      </div>
    </>
  )
}

export default TextAreaDoc
