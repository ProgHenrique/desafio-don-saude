import { styled } from 'src/styles/stitches.config'

export const Section = styled('section', {
  width: '100%',
  minHeight: 450,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '$white',
  borderRadius: 12,
  border: '1px solid $gray100',
  paddingBottom: '1rem',

  '@desktop': {
    gap: '1.25rem',
  },
})

export const Flex = styled('div', {
  overflowX: 'auto',
})

export const Table = styled('table', {
  display: 'table',
  width: 974,
  borderCollapse: 'collapse',
  '@desktop': {
    width: '100%',
  },

  td: {
    padding: '0.75rem',
    borderBottom: '1px solid $gray100',
    fontSize: '$sm',
    span: {
      fontSize: '$xs',
      color: 'rgba(18, 25, 41, 0.64)',
    },
    '@desktop': {
      padding: '1rem 1.5rem',
    },
  },
})

export const TableCell = styled('th', {
  display: 'table-cell',
  textAlign: 'left',
  padding: '0.75rem',
  border: '1px solid $gray100',
  borderLeft: 'none',
  fontSize: '$xs',
  color: 'rgba(18, 25, 41, 0.64)',
  '@desktop': {
    padding: '0.75rem 1.5rem',
  },

  p: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 700,
  },

  span: {
    lineHeight: 0,
  },
})
