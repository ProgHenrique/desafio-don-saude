import * as Toast from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'
import { styled } from 'src/styles/stitches.config'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'fixed',
  top: 100,
  right: 4,
  width: 'auto',
  zIndex: 50,
  borderRadius: 18,
  backgroundColor: '$gray100',
  '@desktop': {
    backgroundColor: '$white',
  },
  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem',
  gap: '1rem',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$blue',
  fontSize: '$sm',
})

export const ToastDescription = styled(Toast.Description, {
  marginTop: 4,
  fontSize: '$xs',
  color: 'rgba(18, 25, 41, 0.64)',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
