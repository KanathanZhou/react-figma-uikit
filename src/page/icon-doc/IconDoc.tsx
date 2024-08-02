import {
  AddIcon, ArrowDetailForwardIcon,
  ArrowDownIcon, ArrowForwardIcon, BellIcon, CategoryIcon,
  CheckmarkIcon,
  CloseIcon, CommentIcon, CopyIcon,
  GlobalIcon,
  IconButton, InfoIcon, ListVerticalIcon, MinusIcon, MoreIcon, OpenInTabIcon,
  Radio, RecentIcon, ResizeToFitIcon, ResizeToFullIcon, RestartIcon,
  SearchBar, SearchIcon, StopIcon, ToggleSideBarIcon,
  ToolBar, UnionIcon, UpgradeIcon
} from "../../../lib";
import React, {useState} from "react";
import {RadioProps} from "../../../lib/component/radio/Radio.types";
import ArrowPresentBackIcon from "../../../lib/icon/arrow-present-back";
import ArrowPresentForwardIcon from "../../../lib/icon/arrow-present-forward";
import ArrowDropUpIcon from "../../../lib/icon/arrow-drop-up";
import ArrowDropDownIcon from "../../../lib/icon/arrow-drop-down";

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

const IconDoc = () => {
  const [size, setSize] = useState<RadioProps['size']>('md')
  const [theme, setTheme] = useState<RadioProps['theme']>('light')

  return (
    <>
      <div style={{flex: 1, overflow: 'auto'}}>

        <div style={{textAlign: 'center', padding: '48px 0 24px 0'}}>Alamoma have built-in icons for you to use</div>
        <SearchBar
          showFocusedBorder size="xl"
          cornerRadius="999px"
          style={{width: 400, margin: '0 auto 24px auto'}}
          placeholder="Search icons, like 'close'"
        />

        <ToolBar size="xl" title="Theme" showBottomBorder={false} style={{fontWeight: 500}}>
          <Radio options={THEME_OPTIONS} value={theme} setValue={setTheme} direction="horizontal"/>
        </ToolBar>

        <ToolBar size="xl" title="Size" showBottomBorder={false} style={{fontWeight: 500}}>
          <Radio options={SIZE_OPTIONS} value={size} setValue={setSize} direction="horizontal"/>
        </ToolBar>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 120,
          backgroundColor: '#f5f7f9'
        }}>
          <IconButton size={size}>
            <UpgradeIcon size={size}/>
          </IconButton>
        </div>

        <div style={{padding: '8px 16px'}}>
          <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>Icons collection</div>
          <div style={{display: 'flex', gap: 12, margin: '12px 0 24px 0', alignItems: 'center'}}>
            <CloseIcon size={size} theme={theme}/>
            <AddIcon size={size} theme={theme}/>
            <ArrowDownIcon size={size} theme={theme}/>
            <ArrowForwardIcon size={size} theme={theme}/>
            <BellIcon size={size} theme={theme}/>
            <CategoryIcon size={size} theme={theme}/>
            <CheckmarkIcon size={size} theme={theme}/>
            <ArrowPresentBackIcon size={size} theme={theme}/>
            <ArrowPresentForwardIcon size={size} theme={theme}/>
            <ArrowDropUpIcon size={size} theme={theme}/>
            <ArrowDropDownIcon size={size} theme={theme}/>
            <ArrowDetailForwardIcon size={size} theme={theme}/>
            <CommentIcon size={size} theme={theme}/>
            <CopyIcon size={size} theme={theme}/>
            <GlobalIcon size={size} theme={theme}/>
            <InfoIcon size={size} theme={theme}/>
            <ListVerticalIcon size={size} theme={theme}/>
            <MinusIcon size={size} theme={theme}/>
            <MoreIcon size={size} theme={theme}/>
            <OpenInTabIcon size={size} theme={theme}/>
            <RecentIcon size={size} theme={theme}/>
            <ResizeToFitIcon size={size} theme={theme}/>
            <ResizeToFullIcon size={size} theme={theme}/>
            <RestartIcon size={size} theme={theme}/>
            <SearchIcon size={size} theme={theme}/>
            <StopIcon size={size} theme={theme}/>
            <ToggleSideBarIcon size={size} theme={theme}/>
            <UnionIcon size={size} theme={theme}/>
            <UpgradeIcon size={size} theme={theme}/>
          </div>

          <div style={{marginTop: 32, fontSize: 13, fontWeight: 500}}>API</div>
          <div style={{marginTop: 12, fontSize: 11}}>待补充</div>
        </div>
      </div>
    </>
  )
}

export default IconDoc
