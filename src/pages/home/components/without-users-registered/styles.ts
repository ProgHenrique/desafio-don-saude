import { styled } from 'src/styles/stitches.config'

export const Content = styled('div', {
  borderTop: '1px solid $gray100',
  padding: '4rem 1.5rem',
})

export const WithoutUser = styled('div', {
  display: 'grid',
  placeItems: 'center',
  gap: '1rem',

  strong: {
    display: 'block',
    color: 'rgba(18, 25, 41, 0.64)',
  },

  span: {
    display: 'block',
    color: 'rgba(18, 25, 41, 0.64)',
  },
})
