import { ChevronDown, Filter, Search } from 'lucide-react'
import { Button } from 'src/styles/button'
import {
  UserCreateAndNumberOfUsers,
  NumberOfUsers,
  SearchArea,
  InputSearch,
  ShowColumns,
  ShowFilters,
  SearchContainer,
  Flex,
} from './styles'
import { useWindowSize } from 'src/hooks/use-window-size'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'

export default function SearchAndCreateUser() {
  const { tableColumns } = useContext(EmpyContext)
  const windowSize = useWindowSize()
  const isWindowSizeDesktop = windowSize > 1024

  // in case screen is smaller than 1024px render window to desktop
  if (isWindowSizeDesktop) {
    return (
      <SearchContainer>
        <Flex>
          <InputSearch>
            <span>
              <Search size={isWindowSizeDesktop ? 16 : 12} />
            </span>
            <input type="text" placeholder="Buscar" />
          </InputSearch>
          <NumberOfUsers>
            <span>Número de usuários:</span>
            <strong>{tableColumns.length}</strong>
          </NumberOfUsers>
        </Flex>
        <Flex css={{ gap: '1rem' }}>
          <ShowColumns>
            <span>Ver colunas</span>
            <ChevronDown color="#121929" size={16} style={{ lineHeight: 0 }} />
          </ShowColumns>
          <ShowFilters>
            <span>Ver Filtros</span>
            <Filter color="#121929" size={14} style={{ lineHeight: 0 }} />
          </ShowFilters>
          <Button
            color="blue"
            size={isWindowSizeDesktop ? 'sm' : 'xs'}
            css={{ fontWeight: 'bold' }}
          >
            Cadastrar usuário
          </Button>
        </Flex>
      </SearchContainer>
    )
  }

  return (
    <>
      <UserCreateAndNumberOfUsers>
        <NumberOfUsers>
          <span>Número de usuários:</span>
          <strong>{tableColumns.length}</strong>
        </NumberOfUsers>
        <Button
          color="blue"
          size={isWindowSizeDesktop ? 'sm' : 'xs'}
          css={{ fontWeight: 'bold' }}
        >
          Cadastrar usuário
        </Button>
      </UserCreateAndNumberOfUsers>
      <SearchArea>
        <InputSearch>
          <span>
            <Search size={isWindowSizeDesktop ? 16 : 12} />
          </span>
          <input type="text" placeholder="Buscar" />
        </InputSearch>
        <ShowColumns>
          <span>Ver colunas</span>
          <ChevronDown color="#121929" size={16} style={{ lineHeight: 0 }} />
        </ShowColumns>
        <ShowFilters>
          <span>Ver Filtros</span>
          <Filter color="#121929" size={14} style={{ lineHeight: 0 }} />
        </ShowFilters>
      </SearchArea>
    </>
  )
}
