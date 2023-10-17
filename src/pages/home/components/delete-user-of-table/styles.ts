import { styled } from 'src/styles/stitches.config'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes } from '@stitches/react'

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
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogContent = styled(AlertDialog.Content, {
  position: 'fixed',
  maxWidth: 547,
  width: 'calc(100% - 2rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 18,
  padding: '1.5rem',
  backgroundColor: '$white',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 700,
})

export const ALertDialogDescription = styled(AlertDialog.Description, {
  margin: 0,
  textAlign: 'center',
  color: 'rgba(18, 25, 41, 0.64)',
})
