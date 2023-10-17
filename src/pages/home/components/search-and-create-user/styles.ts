import { styled } from 'src/styles/stitches.config'

export const SearchContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@desktop': {
    padding: '1.25rem 1.5rem 0',
  },
})

export const UserCreateAndNumberOfUsers = styled(SearchContainer, {
  padding: '1rem 1rem 0',
})

export const Flex = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '2rem',

  '&:last-child': {
    justifyContent: 'right',
  },
})

export const NumberOfUsers = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  padding: '0.5rem 0.75rem',
  borderRadius: 12,
  backgroundColor: '$body',
  alignItems: 'center',
  fontSize: '0.625rem',
  '@desktop': {
    fontSize: '$sm',
  },
})

export const SearchArea = styled('div', {
  width: '100%',
  padding: '0 1rem',
  display: 'grid',
  gridTemplateAreas: `
    'inputSearch inputSearch'
    'showColumns showFilters'
  `,
  rowGap: '0.75rem',
  columnGap: '0.75rem',
})

const SearchItemsArea = styled('div', {
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
})

export const InputSearch = styled(SearchItemsArea, {
  maxWidth: 352,
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
})

export const ShowColumns = styled(SearchItemsArea, {
  gridArea: 'showColumns',
  span: {
    fontSize: '0.625rem',
    color: 'rgba(18, 25, 41, 0.48)',
    '@desktop': {
      fontSize: '$sm',
    },
  },
})

export const ShowFilters = styled(SearchItemsArea, {
  gridArea: 'showFilters',

  span: {
    fontSize: '0.625rem',
    color: 'rgba(18, 25, 41, 0.48)',
    '@desktop': {
      fontSize: '$sm',
    },
  },
})
