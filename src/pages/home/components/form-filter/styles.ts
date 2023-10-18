import { styled } from 'src/styles/stitches.config'

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem 0',
  margin: '0 1rem',
  borderTop: '1px solid $gray100',
  gap: '1.5rem',

  'div:first-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '@desktop': {
      flexDirection: 'row',
    },
  },
})

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '1rem',
})
