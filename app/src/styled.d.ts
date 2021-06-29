import { MouseEventHandler } from 'react';
import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}

export interface WithSelected {
  selected: boolean
}

export interface WithClick {
  onClick: MouseEventHandler
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
        headers: string
      }
      primary: IPalette
      secondary: IPalette
    }
    bg: string,
    colorTheme: string,
  }
}