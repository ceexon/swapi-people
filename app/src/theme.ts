import { DefaultTheme } from 'styled-components'
import backgrounImage from './assets/bg.jpg'

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
      headers: '#ffc107'
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
    }
  },
  bg: `url(${backgrounImage}) no-repeat center center`,
  colorTheme: '#ffffff',
}