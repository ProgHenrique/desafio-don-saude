import { styled } from './stitches.config'

export const InputSearch = styled('div', {
  display: 'flex',
  padding: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  border: '1px solid $gray100',
  borderRadius: 12,
  '@desktop': {
    padding: '0.5rem 1rem',
  },
  width: '100%',
  gridArea: 'inputSearch',
  span: {
    lineHeight: 0,
  },

  input: {
    all: 'unset',
    width: '100%',
    fontSize: '$xs',
    '@desktop': {
      fontSize: '$sm',
    },
  },

  'input::placeholder': {
    color: 'rgba(18, 25, 41, 0.48)',
  },
})
