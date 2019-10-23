import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { useStateValue } from "../hooks/useGlobalState"

import Toolbar from "./toolbar"
import { setTheme } from "../utilities/setTheme"


const Layout = ({ children }) => {

  const [{darkMode}, dispatch] = useStateValue();

  //dark mode detection
  window.matchMedia("(prefers-color-scheme: dark)").addListener(e => dispatch({ type: 'TOGGLE_DARK_MODE', value: e.matches }) );

  //modify root css vars
  if( darkMode ){
    let darkTheme = {
      bgColor: 'var(--gradient-two)',
      fontMain: '#fff',
      fonttwo: 'var(--pewter-blue)',
      highlightOne: 'var(--yellow)'
    }
    setTheme(darkTheme);
  } else {
    setTheme();
  }

  return (
    <>
      <main>
        { children }
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
