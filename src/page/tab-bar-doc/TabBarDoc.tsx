import {Alert, Divider, Highlight, Radio, TabBar, ToolBar} from "../../../lib";
import React, {useState} from "react";
import {AlertProps} from "../../../lib/component/alert/Alert.types";
import {TabBarProps} from "../../../lib/component/tab-bar/TabBar.types";

const TAB_BAR_OPTIONS = [
  { label: 'Tab 1', value: 1 },
  { label: 'Tab 2', value: 2 },
  { label: 'Tab 3', value: 3 },
  { label: 'Tab 4', value: 4 },
  { label: 'Tab 5', value: 5 },
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

const UI_STYLE_OPTIONS = [
  { label: 'text', value: 'text' },
  { label: 'chip', value: 'chip' },
  { label: 'bar', value: 'bar' },
  { label: 'manta', value: 'manta' },
  { label: 'outlined', value: 'outlined' },
]

const TabBarDoc = () => {
  const [size, setSize] = useState<AlertProps['size']>('md')
  const [theme, setTheme] = useState<AlertProps['theme']>('light')
  const [mode, setMode] = useState<AlertProps['mode']>('info')
  const [tab, setTab] = useState(1)
  const [uiStyle, setUiStyle] = useState<TabBarProps['uiStyle']>('text')

  return (
    <>
      <ToolBar title="Tab Bar" size="xxxl"/>

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
            <TabBar
              options={TAB_BAR_OPTIONS}
              value={tab}
              setValue={setTab}
              uiStyle={uiStyle}
              theme={theme}
              size={size}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<TabBar
  options="${JSON.stringify(TAB_BAR_OPTIONS)}"
  size="${size}"
  theme="${theme}"
  uiStyle="${uiStyle}"
>
  Hello! I'm an alert!
</TabBar>`}
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

          <Alert style={{ margin: '0 20px 20px'}}>Only takes effect on text and chip style</Alert>
          <div style={{padding: '0 20px'}}>
            <Radio options={SIZE_OPTIONS} value={size} setValue={setSize} direction="horizontal"/>
          </div>

        </div>

      </div>
    </>
  )
}

export default TabBarDoc
