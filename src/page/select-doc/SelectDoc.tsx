import React, {useState} from "react"
import {Checkbox, Divider, Highlight, Radio, Select, SelectOption, TextInput, ToolBar} from "../../../lib";
import {SelectProps, SelectUIStyle} from "../../../lib/component/select/Select.types";
import {ListItemActiveStyle, ListItemHoverStyle} from "../../../lib/component/list-item/ListItem.types";

export const DEVICE_OPTIONS: SelectOption[] = [
  { value: 'linux', label: 'Ubuntu' },
  { value: 'darwin', label: 'Mac' },
  { value: 'iox', label: 'iPhone' },
  { value: 'android', label: 'Android X' },
  { value: 'windows', label: 'Windows 2023' },
]

export const RELEASE_TYPE_FILTER_OPTIONS = [
  { label: 'CVML', value: 'CVML' },
  { label: 'CVML_J3', value: 'CVML_J3' },
  { label: 'CYBERTRON', value: 'CYBERTRON' },
  { label: 'FIRMWARE_AMBARELLA', value: 'FIRMWARE_AMBARELLA' },
  { label: 'FIRMWARE_BLACK_MAMBA', value: 'FIRMWARE_BLACK_MAMBA' },
  { label: 'FIRMWARE_J3', value: 'FIRMWARE_J3' },
  { label: 'FIRMWARE_NETWORK', value: 'FIRMWARE_NETWORK' },
  { label: 'MAP', value: 'MAP' },
  { label: 'PREDICTION', value: 'PREDICTION' },
  { label: 'UPDATE_TOOL', value: 'UPDATE_TOOL' },
  { label: 'RATCHET_CSAMPLE_ASIDE', value: 'RATCHET_CSAMPLE_ASIDE' },
  { label: 'RATCHET_CSAMPLE_BSIDE', value: 'RATCHET_CSAMPLE_BSIDE' },
  { label: 'ROBOSENSE', value: 'ROBOSENSE' },
  { label: 'ACEINNA', value: 'ACEINNA' },
  { label: 'DMS', value: 'DMS' },
  { label: 'HD_MAP_NAVINFO', value: 'HD_MAP_NAVINFO' },
  { label: 'HD_MAP_INCEPTIO', value: 'HD_MAP_INCEPTIO' },
  { label: 'HD_MAP_REVISION', value: 'HD_MAP_REVISION' },
  { label: 'MAP_ADASIS', value: 'MAP_ADASIS' },
  { label: 'FIRMWARE_ZVISION', value: 'FIRMWARE_ZVISION' },
  { label: 'FIRMWARE_XEON_B', value: 'FIRMWARE_XEON_B' },
  { label: 'FIRMWARE_GARFIELD_L4', value: 'FIRMWARE_GARFIELD_L4' },
  { label: 'FIRMWARE_J3_M51C_ASIDE', value: 'FIRMWARE_J3_M51C_ASIDE' },
  { label: 'FIRMWARE_VINO_CV2AQ', value: 'FIRMWARE_VINO_CV2AQ' },
  { label: 'FIRMWARE_VINO_CV2FS', value: 'FIRMWARE_VINO_CV2FS' },
  { label: 'RATCHET_DSAMPLE_ASIDE', value: 'RATCHET_DSAMPLE_ASIDE' },
  { label: 'RATCHET_DSAMPLE_BSIDE', value: 'RATCHET_DSAMPLE_BSIDE' },
  { label: 'CRYPTO', value: 'CRYPTO' },
  { label: 'BRINGUP', value: 'BRINGUP' },
  { label: 'DEBUGTOOLS', value: 'DEBUGTOOLS' },
  { label: 'ZVISION', value: 'ZVISION' },
  { label: 'PPN_RADAR_J3', value: 'PPN_RADAR_J3' },
  { label: 'FIRMWARE_SIDESWIPE', value: 'FIRMWARE_SIDESWIPE'},
  { label: 'PPN_CAMERA_J5', value: 'PPN_CAMERA_J5'},
  { label: 'PPN_LIDAR_J5', value: 'PPN_LIDAR_J5'},
  { label: 'PPN_RADAR_J5', value: 'PPN_RADAR_J5'},
  { label: 'PPN_DMS_J5', value: 'PPN_DMS_J5'},
  { label: 'FIRMWARE_J5_A', value: 'FIRMWARE_J5_A'},
  { label: 'FIRMWARE_J5_B', value: 'FIRMWARE_J5_B'},
  { label: 'FIRMWARE_J5_IMAGE', value: 'FIRMWARE_J5_IMAGE'},
  { label: 'XEON_CONFIG', value: 'XEON_CONFIG'},
  { label: 'INNOVUSION', value: 'INNOVUSION'},
  { label: 'ONBOARD_CONFIG', value: 'ONBOARD_CONFIG'},
  { label: 'FIRMWARE_MICRON_SSD', value: 'FIRMWARE_MICRON_SSD'},
  { label: 'FIRMWARE_LX2160_IMAGE', value: 'FIRMWARE_LX2160_IMAGE'},
  { label: 'FIRMWARE_SJA1110', value: 'FIRMWARE_SJA1110'},
  { label: 'IVI_APP_HOME', value: 'IVI_APP_HOME'},
  { label: 'IVI_APP_CALIBRATION', value: 'IVI_APP_CALIBRATION'},
  { label: 'IVI_APP_SETTING', value: 'IVI_APP_SETTING'},
  { label: 'IVI_APP_CAMERAVIEW', value: 'IVI_APP_CAMERAVIEW'},
  { label: 'IVI_APP_LAUNCHER', value: 'IVI_APP_LAUNCHER'},
  { label: 'PPN_MULTI_MOD_J5', value: 'PPN_MULTI_MOD_J5'},
  { label: 'VDSP_IMAGE', value: 'VDSP_IMAGE'},
  { label: 'FIRMWARE_BOSCH_ADAS_APP', value: 'FIRMWARE_BOSCH_ADAS_APP'},
  { label: 'FIRMWARE_J5_DMS', value: 'FIRMWARE_J5_DMS'},
  { label: 'FIRMWARE_HIRAIN_DMS', value: 'FIRMWARE_HIRAIN_DMS'},
  { label: 'FIRMWARE_BOSCH_ADAS_CAL', value: 'FIRMWARE_BOSCH_ADAS_CAL'},
  { label: 'FIRMWARE_BOSCH_FRADAR_CAL', value: 'FIRMWARE_BOSCH_FRADAR_CAL'},
];

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

const UI_STYLE_OPTIONS: { label: SelectUIStyle, value: SelectUIStyle}[] = [
  { label: 'flat', value: 'flat' },
  { label: 'outlined', value: 'outlined' },
  { label: 'hidden-arrow', value: 'hidden-arrow' },
  { label: 'hover-outlined', value: 'hover-outlined' },
]

const THEME_OPTIONS = [
  { label: 'light', value: 'light' },
  { label: 'dark', value: 'dark' },
]

const SelectDoc = () => {
  const [value, setValue] = useState()
  const [uiStyle, setUiStyle] = useState<SelectProps['uiStyle']>('outlined')
  const [size, setSize] = useState<SelectProps['size']>('md')
  const [showArrow, setShowArrow] = useState(false)
  const [floatingOffset, setFloatingOffset] = useState<number>(0)
  const [allowCustomOption, setAllowCustomOption] = useState(false)
  const [allowTextFilter, setAllowTextFilter] = useState(false)
  const [prefix, setPrefix] = useState('')
  const [theme, setTheme] = useState<SelectProps['theme']>('light')
  const [activeStyle, setActiveStyle] = useState<ListItemActiveStyle>('checkmark')
  const [hoverStyle, setHoverStyle] = useState<ListItemHoverStyle>('outlined')

  return (
    <>
      <ToolBar title="Select" size="xxxl"/>

      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>

        <div style={{ flex: 1, overflow: 'auto' }}>
          <div style={{ height: 200, backgroundColor: '#f5f7f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Select
              showArrow={showArrow}
              floatingOffset={+floatingOffset}
              options={RELEASE_TYPE_FILTER_OPTIONS}
              value={value}
              setValue={setValue}
              uiStyle={uiStyle}
              prefix={prefix}
              size={size}
              allowCustomOption={allowCustomOption}
              allowTextFilter={allowTextFilter}
              style={{width: 240}}
              cornerRadius={4}
              theme={theme}
              activeStyle={activeStyle}
              hoverStyle={hoverStyle}
            />
          </div>

          <div style={{ padding: '8px 16px' }}>

            <Highlight title="Code" onCopied={() => alert('Copied')} style={{ fontSize: 13, fontWeight: 500 }}>
{`<Select
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

            <div style={{ marginTop: 32, fontSize: 13, fontWeight: 500 }}>API</div>
            <div style={{ marginTop: 12, fontSize: 11 }}>待补充</div>
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

export default SelectDoc