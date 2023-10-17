import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    fonts: {
      default: "'Roboto', sans-serif",
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '2rem',
      '2xl': '3.875rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',

      blue: '#00BDFF',
      blueDark: '#121929',
      gray100: 'rgba(18, 25, 41, 0.12)',

      title: '#121929',
      body: '#EAEDEE',
    },
  },

  media: {
    desktop: '(min-width: 1024px)',
  },
})
