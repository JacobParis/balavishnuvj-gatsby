import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { ThemeProvider, createGlobalStyle, css } from "styled-components"
import { DARK_THEME, LIGHT_THEME } from "../utils/theme"
import SinglePageLayout from "./SinglePageLayout"
import BlogLayout from "./BlogLayout"

const THEME_STORAGE_KEY = "prefferedTheme"

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.textColor};
    background:  ${props => (props.theme.isDark ? "#1f1f1f" : "#f4f3f9")};
    @media (max-width: 699px) {
      
    }
    * {
      font-family: 'Open Sans';
      font-size: 16px;
      ${
        false &&
        css`
          outline: 1px solid red;
        `
      }
    }
  }
`

const Layout = ({ location, title, children, path }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem(THEME_STORAGE_KEY)
  )
  const isDarkTheme = theme === THEMES.DARK

  function handleToggleTheme() {
    setTheme(current => {
      if (current === THEMES.DARK) {
        return THEMES.LIGHT
      }
      return THEMES.DARK
    })
  }

  useEffect(() => {
    if (theme) {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    }
  }, [theme])
  const themeObj = isDarkTheme ? DARK_THEME : LIGHT_THEME

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle theme={themeObj} />
      <div>
        {path.startsWith("/blog") ? (
          <BlogLayout toggleTheme={handleToggleTheme}>{children}</BlogLayout>
        ) : (
          <SinglePageLayout toggleTheme={handleToggleTheme}>
            {children}
          </SinglePageLayout>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Layout
