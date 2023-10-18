import { ChevronDown, Filter, Search } from 'lucide-react'
import { Button } from 'src/styles/button'
import {
  UserCreateAndNumberOfUsers,
  NumberOfUsers,
  SearchArea,
  ShowColumns,
  ShowFilters,
  SearchContainer,
  Flex,
} from './styles'
import { useWindowSize } from 'src/hooks/use-window-size'
import { ChangeEvent, useContext, useState } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'
import { InputSearch } from 'src/styles/input'
import FormFilter from '../form-filter'
import { useNavigate } from 'react-router-dom'

export default function SearchAndCreateUser() {
  const { tableColumns, searchUser, seeColumns, setSeeColumns } =
    useContext(EmpyContext)
  const [ableToFilter, setAbleToFilter] = useState(false)
  const [termToSearch, setTermToSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setTermToSearch(event.target.value)
    const term = event.target.value.toLowerCase().trim()
    searchUser(term)
  }

  function handleChangeColumnVisibility() {
    setSeeColumns(!seeColumns)
  }

  function handleFilter() {
    setAbleToFilter(!ableToFilter)
  }

  function handleCreateNewUser() {
    navigate('/create-user')
  }

  const windowSize = useWindowSize()
  const isWindowSizeDesktop = windowSize > 1024

  return (
    // in case screen is smaller than 1024px render window to desktop
    <>
      {isWindowSizeDesktop ? (
        <SearchContainer>
          <Flex>
            <InputSearch css={{ maxWidth: 352, padding: '0.5rem' }}>
              <span>
                <Search size={isWindowSizeDesktop ? 16 : 12} />
              </span>
              <input
                type="text"
                placeholder="Buscar"
                value={termToSearch}
                onChange={handleSearch}
              />
            </InputSearch>
            <NumberOfUsers>
              <span>Número de usuários:</span>
              <strong>{tableColumns.length}</strong>
            </NumberOfUsers>
          </Flex>
          <Flex css={{ gap: '1rem' }}>
            <ShowColumns as={'button'} onClick={handleChangeColumnVisibility}>
              <span>{seeColumns ? 'esconder colunas' : 'ver colunas'}</span>
              <ChevronDown
                color="#121929"
                size={16}
                style={{ lineHeight: 0 }}
              />
            </ShowColumns>
            <ShowFilters
              as={'button'}
              onClick={handleFilter}
              ableToFilter={ableToFilter}
            >
              <span>{ableToFilter ? 'Esconder filtros' : 'Ver Filtros'}</span>
              <Filter color="#121929" size={14} style={{ lineHeight: 0 }} />
            </ShowFilters>
            <Button
              color="blue"
              size={isWindowSizeDesktop ? 'sm' : 'xs'}
              css={{ fontWeight: 'bold' }}
              onClick={handleCreateNewUser}
            >
              Cadastrar usuário
            </Button>
          </Flex>
        </SearchContainer>
      ) : (
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
              onClick={handleCreateNewUser}
            >
              Cadastrar usuário
            </Button>
          </UserCreateAndNumberOfUsers>
          <SearchArea>
            <InputSearch css={{ padding: '0.5rem' }}>
              <span>
                <Search size={isWindowSizeDesktop ? 16 : 12} />
              </span>
              <input
                type="text"
                placeholder="Buscar"
                value={termToSearch}
                onChange={handleSearch}
              />
            </InputSearch>
            <ShowColumns as={'button'} onClick={handleChangeColumnVisibility}>
              <span>{seeColumns ? 'esconder colunas' : 'ver colunas'}</span>
              <ChevronDown
                color="#121929"
                size={16}
                style={{ lineHeight: 0 }}
              />
            </ShowColumns>
            <ShowFilters
              as={'button'}
              onClick={handleFilter}
              ableToFilter={ableToFilter}
            >
              <span>{ableToFilter ? 'Esconder filtros' : 'Ver Filtros'}</span>
              <Filter color="#121929" size={14} style={{ lineHeight: 0 }} />
            </ShowFilters>
          </SearchArea>
        </>
      )}
      <FormFilter ableToFilter={ableToFilter} />
    </>
  )
}
