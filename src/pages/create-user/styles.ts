import { styled } from 'src/styles/stitches.config'

export const Section = styled('section', {
  width: '100%',
})

export const Form = styled('form', {
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  gap: '2rem',
  maxWidth: 850,
  width: '100%',
})

export const FormContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1rem',
  backgroundColor: '$white',
  borderRadius: 18,
  '@desktop': {
    padding: '1.5rem',
  },

  strong: {
    fontSize: '$xs',
    '@desktop': {
      fontSize: '$sm',
    },
  },
})

export const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@desktop': {
    flexDirection: 'row',
    button: {
      width: 267,
    },
  },
})

export const FormAnnotation = styled('span', {
  color: '#f75a68',
  fontSize: '0.625rem',
  '@desktop': {
    fontSize: '$xs',
  },
})
