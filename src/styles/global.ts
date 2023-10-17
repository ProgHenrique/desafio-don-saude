import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    fontFamily: '$default',
    backgroundColor: '#f7f7f7',
    color: '$text',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },
})
