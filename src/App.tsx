import React, {useState} from 'react'
import {Divider, List, SearchBar} from "../lib";
import './App.css'
import {NavLink, Outlet} from "react-router-dom";

const COMPONENTS = [
  { label: '🥨 Alert 🎋', url: '/components/alert' },
  { label: '🥨 Button 🎋', url: '/components/button' },
  { label: 'Card', url: '/components/card' },
  { label: '🥨 Checkbox 🎋', url: '/components/checkbox' },
  { label: '🥨 Chip 🎋', url: '/components/chip' },
  { label: 'Confirm Modal', url: '/components/card' },
  { label: 'Divider', url: '/components/divider' },
  { label: 'Floating Modal', url: '/components/floating-modal' },
  { label: 'Highlight', url: '/components/highlight' },
  { label: '🥨 Icon button 🎋', url: '/components/icon-button' },
  { label: '🥨 Linkage 🎋', url: '/components/linkage' },
  { label: 'List', url: '/components/list' },
  { label: '🥨 List item 🎋', url: '/components/list-item' },
  { label: 'Loading Modal', url: '/components/divider' },
  { label: '🥨 Loading Spinner 🎋', url: '/components/loading-spinner' },
  { label: 'Modal', url: '/components/divider' },
  { label: '🥨 MultiSelect 🎋', url: '/components/multi-select' },
  { label: '🥨 Radio 🎋', url: '/components/radio' },
  { label: '🥨 Search Bar 🎋', url: '/components/search-bar' },
  { label: '🥨 Select 🎋', url: '/components/select' },
  { label: '🥨 Stepper 🎋', url: '/components/stepper' },
  { label: '🥨 Tab Bar 🎋', url: '/components/tab-bar' },
  { label: 'Table', url: '/components/table' },
  { label: '🥨 Text Area 🎋', url: '/components/text-area' },
  { label: '🥨 Text Input 🎋', url: '/components/text-input' },
  { label: '🥨 Tool Bar 🎋', url: '/components/tool-bar' },
]

const VIEWS = [
  { label: 'Avatar button', url: '/views/avatar-button' },
  { label: 'Feedback modal', url: '/views/feedback-modal' },
]

const App = () => {
  const [showComponents, setShowComponents] = useState(true)
  const [showViews, setShowViews] = useState(true)

  return (
      <div style={{ display: 'flex', overflow: 'hidden', height: '100%' }}>

        <div style={{ flex: 'none', width: '240px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div className="logo-bar">
            <div className="logo-button whyteInktrap">Taivan</div>
          </div>
          <div style={{ margin: '0 8px 8px 8px', flex: 'none' }}>
            <SearchBar placeholder="Search components, views" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', overflow: 'auto'}}>
            <NavLink to="installation" className="app-nav-item">Installation</NavLink>
            <Divider top={8} bottom={8}/>
            <List header="Components" collapsable show={showComponents} setShow={setShowComponents}>
              {COMPONENTS.map((component, index) => {
                return (
                  <NavLink key={index} to={component.url} className="app-nav-item">
                    {component.label}
                  </NavLink>
                )
              })}
            </List>
            <Divider top={8} bottom={8}/>

            <NavLink to="icons" className="app-nav-item">
              🥨 Icons 🎋
            </NavLink>

            <Divider top={8} bottom={8}/>
            <List header="Views" collapsable show={showViews} setShow={setShowViews}>
              {VIEWS.map((component, index) => {
                return (
                  <NavLink key={index} to={component.url} className="app-nav-item">
                    {component.label}
                  </NavLink>
                )
              })}
            </List>
          </div>
        </div>

        <Divider direction="vertical"/>

        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </div>

      </div>
  )
}

export default App
