import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes } from '@stitches/react'
import { styled } from 'src/styles/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Overlay = styled(AlertDialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateY(0%)' },
  '100%': { opacity: 1, transform: 'translateY(-100%)' },
})

const contentShowDesktop = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogContent = styled(AlertDialog.Content, {
  position: 'fixed',
  maxWidth: 547,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  top: '100%',
  left: 0,
  transform: 'translateY(-100%)',
  borderRadius: '18px 18px 0 0',
  padding: '1.5rem',
  backgroundColor: '$white',
  animation: `${contentShow} 300ms ease-out`,
  '@desktop': {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 18,
    animation: `${contentShowDesktop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  strong: {
    width: '100%',
    textAlign: 'left',
    fontSize: '$xs',
    '@desktop': {
      fontSize: '$sm',
    },
  },
})

export const Flex = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: '1rem',
  '@desktop': {
    flexDirection: 'row',
    button: {
      width: '100%',
      fontSize: '$md',
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
