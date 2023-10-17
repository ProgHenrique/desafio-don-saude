import { styled } from './stitches.config'

// global button style
export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  gap: 6,
  cursor: 'pointer',
  padding: '0.5rem 1.5rem',
  '@desktop': {
    padding: '0.75rem 2rem',
  },
  borderRadius: 24,
  variants: {
    color: {
      blue: {
        backgroundColor: '$blue',
        color: '$white',
      },
      gray: {
        backgroundColor: 'rgba(18, 25, 41, 0.12)',
        color: '$title',
      },
      red: {
        backgroundColor: '#FF4E3A',
        color: '$white',
      },
    },
    size: {
      xs: {
        fontSize: '$xs',
        fontWeight: 'bold',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: 'md',
        fontWeight: 'bold',
      },
      lg: {
        fontSize: '$lg',
        fontWeight: 'bold',
      },
    },
  },

  p: {
    fontSize: '$xs',
  },
})
