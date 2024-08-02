import {Divider, Highlight, Linkage, Radio, ToolBar} from "../../../lib";
import React, {useState} from "react";
import {LinkageProps} from "../../../lib/component/linkage/Linkage.types";

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

const SKIN_OPTIONS = [
  { label: 'default', value: '' },
  { label: 'blue', value: 'blue' },
  { label: 'blue5', value: 'blue5' },
  { label: 'red', value: 'red' },
  { label: 'orange', value: 'orange' },
  { label: 'purple', value: 'purple' },
  { label: 'green', value: 'green' },
]

const LinkageDoc = () => {
  const [size, setSize] = useState<LinkageProps['size']>('md')
  const [theme, setTheme] = useState<LinkageProps['theme']>('light')
  const [skin, setSkin] = useState<LinkageProps['skin'] | ''>('')

  return (
    <>
      <ToolBar title="Linkage" size="xxxl"/>

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
            <Linkage
              href="https://devportal.inceptio.tech/"
              size={size}
              theme={theme}
              skin={skin === '' ? undefined : skin}
            >
              Dev portal
            </Linkage>
          </div>

          <div style={{padding: '8px 16px'}}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{fontSize: 13, fontWeight: 500}}>
{`<Linkage
  href="https://devportal.inceptio.tech/"
  size="${size}"
  theme="${theme}"
  skin="${skin}"
>
  Dev portal
</Linkage>`}
            </Highlight>

            <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
            <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
          </div>
        </div>

        <div style={{flex: 'none', width: 300, borderLeft: '1px solid var(--alamoma-black-5)', overflow: 'auto'}}>
          <ToolBar size="xl" title="Skin" showBottomBorder={false} style={{fontWeight: 500}}/>
          <div style={{padding: '0 20px'}}>
            <Radio options={SKIN_OPTIONS} value={skin} setValue={setSkin} direction="horizontal"/>
          </div>

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

export default LinkageDoc
