import { styled } from 'src/styles/stitches.config'

export const Section = styled('section', {
  width: '100%',
})

export const Flex = styled('div', {
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: 850,
  width: '100%',
})

export const UserInfoContainer = styled('div', {
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

  '& > strong': {
    width: '100%',
    textAlign: 'center',
    fontSize: '$lg',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  p: {
    fontSize: '$sm',
  },

  strong: {
    fontSize: '$md',
  },
})
