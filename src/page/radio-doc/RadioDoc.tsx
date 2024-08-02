import {Divider, Highlight, Radio, ToolBar} from "../../../lib";
import React, {useState} from "react";
import {RadioProps} from "../../../lib/component/radio/Radio.types";

const OPTIONS = [
  { label: 'Banana', value: 'banana' },
  { label: 'Apple', value: 'apple' },
  { label: 'Grape', value: 'grape' },
]

const THEME_OPTIONS = [
  { label: 'light', value: 'light' },
  { label: 'dark', value: 'dark' },
]

const DIRECTION_OPTIONS = [
  { label: 'horizontal', value: 'horizontal' },
  { label: 'vertical', value: 'vertical' },
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

const RadioDoc = () => {
  const [value, setValue] = useState('banana')
  const [size, setSize] = useState<RadioProps['size']>('md')
  const [theme, setTheme] = useState<RadioProps['theme']>('light')
  const [direction, setDirection] = useState<RadioProps['direction']>('vertical')

  return (
    <>
      <ToolBar title="Radio" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{flex: 1, overflow: 'auto'}}>
          <div style={{
            height: 200,
            backgroundColor: '#f5f7f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Radio
              options={OPTIONS}
              direction={direction}
              value={value}
              setValue={setValue}
              size={size}
              theme={theme}
            />
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
              {`<Radio
  options={${JSON.stringify(OPTIONS)}}
  direction="${direction}"
  value={value}
  setValue={setValue}
  size="${size}"
  theme="${theme}"
/>`}
            </Highlight>

            <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
            <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
          </div>
        </div>

        <div style={{flex: 'none', width: 300, borderLeft: '1px solid var(--alamoma-black-5)', overflow: 'auto'}}>
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

          <ToolBar size="xl" title="Direction" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={DIRECTION_OPTIONS} value={direction} setValue={setDirection} direction="horizontal"/>
          </div>
        </div>

      </div>
    </>
  )
}

export default RadioDoc
