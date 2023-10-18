import { styled } from 'src/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$body',
  padding: '1.5rem 1rem',
  gap: '1.5rem',
  minHeight: '100vh',
  '@desktop': {
    gap: '2rem',
    padding: '2rem',
  },
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  '& > strong': {
    fontSize: '1.25rem',
    '@desktop': {
      fontSize: '1.75rem',
    },
  },

  '& > p': {
    color: 'rgba(18, 25, 41, 0.64)',
    display: 'flex',
    alignItems: 'center',
  },
})
