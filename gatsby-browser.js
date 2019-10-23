import React from "react"
import { StateProvider } from "./src/hooks/useGlobalState"
import { reducer } from "./src/utilities/reducer"
import Storage from "./src/utilities/storage"

//import global styles
import "./src/styles/reset.scss"
import "./src/styles/colors.scss"
import "./src/styles/typography.scss"
import "./src/styles/base.scss"

//get inititial dark mode
const getInitialDarkMode = () => {
  let storage = new Storage()
  if( storage.retrieve('chrisfWebsite') ){
    if( storage.retrieve('chrisfWebsite').darkMode ){
      return storage.retrieve('chrisfWebsite').darkMode
    }
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

//set initial state object
const initialState = {
  darkMode: getInitialDarkMode()
  // darkMode: false
}

export const wrapPageElement = ({ element, props }) => (
  <StateProvider reducer={reducer} initialState={initialState} {...props}>{element}</StateProvider>
);
