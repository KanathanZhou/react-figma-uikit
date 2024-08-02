import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ButtonDoc from "./page/button-doc/ButtonDoc";
import Installation from "./page/installation/Installation";
import AlertDoc from "./page/alert-doc/AlertDoc";
import TabBarDoc from "./page/tab-bar-doc/TabBarDoc";
import StepperDoc from "./page/stepper-doc/StepperDoc";
import SelectDoc from "./page/select-doc/SelectDoc";
import HighlightDoc from "./page/highlight-doc/HighlightDoc";
import TableDoc from "./page/table-doc/TableDoc";
import CheckboxDoc from "./page/checkbox-doc/CheckboxDoc";
import ToolBarDoc from "./page/tool-bar-doc/ToolBarDoc";
import TextInputDoc from "./page/text-input-doc/TextInputDoc";
import SearchBarDoc from "./page/search-bar-doc/SearchBarDoc";
import CardDoc from "./page/card-doc/CardDoc";
import ChipDoc from "./page/chip-doc/ChipDoc";
import TextAreaDoc from "./page/text-area-doc/TextAreaDoc";
import FeedbackModalDoc from "./page/view/feedback-modal-doc/FeedbackModalDoc";
import FloatingModalDoc from "./page/floating-modal-doc/FloatingModalDoc";
import LinkageDoc from "./page/linkage-doc/LinkageDoc";
import MultiSelectDoc from "./page/multi-select-doc/MultiSelectDoc";
import LoadingSpinnerDoc from "./page/loading-spinner/LoadingSpinnerDoc";
import RadioDoc from "./page/radio-doc/RadioDoc";
import ListItemDoc from "./page/list-item-doc/ListItemDoc";
import IconButtonDoc from "./page/icon-button-doc/IconButtonDoc";
import IconDoc from "./page/icon-doc/IconDoc";
import AvatarButtonDoc from "./page/view/avatar-button-doc/AvatarButtonDoc";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'installation',
        element: <Installation />
      },
      {
        path: 'components/button',
        element: <ButtonDoc />
      },
      {
        path: 'components/radio',
        element: <RadioDoc />
      },
      {
        path: 'components/linkage',
        element: <LinkageDoc />
      },
      {
        path: 'components/chip',
        element: <ChipDoc />
      },
      {
        path: 'components/alert',
        element: <AlertDoc />
      },
      {
        path: 'components/tab-bar',
        element: <TabBarDoc />
      },
      {
        path: 'components/stepper',
        element: <StepperDoc />
      },
      {
        path: 'components/select',
        element: <SelectDoc />
      },
      {
        path: 'components/multi-select',
        element: <MultiSelectDoc />
      },
      {
        path: 'components/highlight',
        element: <HighlightDoc />
      },
      {
        path: 'components/table',
        element: <TableDoc />
      },
      {
        path: 'components/checkbox',
        element: <CheckboxDoc />
      },
      {
        path: 'components/tool-bar',
        element: <ToolBarDoc />
      },
      {
        path: 'components/text-input',
        element: <TextInputDoc />
      },
      {
        path: 'components/text-area',
        element: <TextAreaDoc />
      },
      {
        path: 'components/search-bar',
        element: <SearchBarDoc />
      },
      {
        path: 'components/card',
        element: <CardDoc />
      },
      {
        path: 'components/floating-modal',
        element: <FloatingModalDoc />
      },
      {
        path: 'components/loading-spinner',
        element: <LoadingSpinnerDoc />
      },
      {
        path: 'components/list-item',
        element: <ListItemDoc />
      },
      {
        path: 'components/icon-button',
        element: <IconButtonDoc />
      },
      {
        path: 'icons',
        element: <IconDoc />
      },
      {
        path: 'icons',
        element: <ButtonDoc />
      },
      {
        path: 'views/feedback-modal',
        element: <FeedbackModalDoc />
      },
      {
        path: 'views/avatar-button',
        element: <AvatarButtonDoc />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)
