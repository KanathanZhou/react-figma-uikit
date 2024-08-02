import {Button, Checkbox, Divider, Highlight, Radio, TextInput, ToolBar} from "../../../lib";
import React, {useState} from "react";
import {ButtonProps} from "../../../lib/component/button/Button.types";

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
  { label: 'filled', value: 'filled' },
  { label: 'outlined', value: 'outlined' },
  { label: 'text', value: 'text' },
  { label: 'flat', value: 'flat' },
  { label: 'linkage', value: 'linkage' },
]

const SKIN_OPTIONS = [
  { label: 'none', value: '' },
  { label: 'blue', value: 'blue' },
  { label: 'blue5', value: 'blue5' },
  { label: 'red', value: 'red' },
  { label: 'orange', value: 'orange' },
  { label: 'purple', value: 'purple' },
  { label: 'green', value: 'green' },
]

const ButtonDoc = () => {
  const [size, setSize] = useState<ButtonProps['size']>('md')
  const [theme, setTheme] = useState<ButtonProps['theme']>('light')
  const [uiStyle, setUiStyle] = useState<ButtonProps['uiStyle']>('filled')
  const [skin, setSkin] = useState<ButtonProps['skin'] | ''>('')
  const [disable, setDisable] = useState(false)

  return (
    <>
      <ToolBar title="Button" size="xxxl"/>

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
            <Button
              size={size}
              theme={theme}
              uiStyle={uiStyle}
              skin={skin === '' ? undefined : skin}
              disabled={disable}
            >
              Hello! I'm an button!
            </Button>
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<Button
  size="${size}"
  theme="${theme}"
  uiStyle="${uiStyle}"
  skin="${skin}"
  disabled={${disable}}
>
  Hello! I'm a button!
</Button>`}
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

          <ToolBar size="xl" title="Skin" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={SKIN_OPTIONS} value={skin} setValue={setSkin} direction="horizontal"/>
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
          </div>

        </div>

      </div>
    </>
  )
}

export default ButtonDoc
