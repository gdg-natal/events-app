'use client'
import { createGlobalStyle } from 'styled-components'

import bgVector from '@/app/assets/bg-vector.svg'

const sizing = {
  xxsm: '.25rem',
  xsm: '.5rem',
  sm: '.75rem',
  md: '1rem',
  lg: '1.5rem',
  xlg: '2rem',
  xxlg: '3rem',
  xxxlg: '4rem'
}

const colors = {
  black: '#000000',
  white: '#ffffff',
  greyLight: '#f1f3f4',
  grey: '#5f6368',
  blue: '#4285f4',
  green: '#34a853',
  yellow: '#f9ab00',
  red: '#ea4335',
  blueLight: '#8ab4f8',
  greenLight: '#81c995',
  yellowLight: '#fde293',
  redLight: '#f28b82'
}

const breakpoints = {
  sm: 576,
  md: 960,
  lg: 1080,
  xlg: 1440
}

const theme: any = {
  colors,
  sizing,
  breakpoints
}

const parseRootCSS = () => {
  const themeKeys = Object.keys(theme)

  const parsedTheme = themeKeys.reduce((acc, key) => {
    const propKeys = Object.keys(theme[key])
    const parsedProps = propKeys.reduce((acc, propKey) => {
      return `${acc}\n--${key}-${propKey}: ${theme[key][propKey]};`
    }, '')

    return `${acc}\n${parsedProps}`
  }, '')

  return parsedTheme
}

const GlobalStyle = createGlobalStyle`
  :root {
    ${parseRootCSS()}
  }

  * {
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.17rem; }
  h4 { font-size: 1rem; }
  p { font-size: 0.875rem; }
  span { font-size: 0.75rem; }

  h1, h2, h3, h4, p, span, body, html, input, button, select, textarea {
    margin: 0;
  }

  iframe {
    border: none;
  }

  body {
    background: url('${bgVector}') no-repeat right bottom 50px;
  }
`

export default GlobalStyle
