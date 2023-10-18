import { styled } from './stitches.config'

export const Label = styled('label', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  'p:first-child': {
    fontSize: '$xs',
    '@desktop': {
      fontSize: '$sm',
    },
  },

  'p:last-child': {
    position: 'absolute',
    bottom: -18,
    left: 0,
  },
})
