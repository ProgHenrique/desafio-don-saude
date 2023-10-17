import { styled } from 'src/styles/stitches.config'

export const LogoContainer = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignContent: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '2.625rem',
    height: '2.625rem',
    lineHeight: 0,
  },

  span: {
    fontFamily: "'Archivo Black', sans-serif",
    color: '$white',
    fontSize: '2.625rem',
  },
})
