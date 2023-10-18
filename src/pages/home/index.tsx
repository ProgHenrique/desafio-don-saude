import { Button } from 'src/styles/button'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Flex, Section, Table, TableCell } from './style'
import { ChevronRight, ChevronsUpDown, PenSquare, Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'
import convertDateFormat from 'src/utils/convert-date-format'
import SearchAndCreateUser from './components/search-and-create-user'
import WithoutUsersRegistered from './components/without-users-registered'
import DeleteScreenPopUp from './components/delete-user-of-table'
import EditUserScreenPopUp from './components/edit-user'
import { useNavigate } from 'react-router-dom'

export default function TableOfUsers() {
  const { tableColumns, seeColumns, userToInfoPage } = useContext(EmpyContext)
  const navigate = useNavigate()

  const tableCells = [
    'Nome',
    'Cargo',
    'Data de cadastro',
    'Última alteração',
    'Ações',
  ]

  function handleUserMoreInfos(index: number) {
    userToInfoPage(index)
    navigate('/user')
  }

  return (
    <Section>
      <SearchAndCreateUser />
      {/* In case with no users regitered render component to report this */}
      {tableColumns.length < 1 ? (
        <WithoutUsersRegistered />
      ) : (
        <Flex css={{ display: `${seeColumns ? 'block' : 'none'}` }}>
          <Table>
            <thead>
              <tr>
                {tableCells.map((title, index) => {
                  return (
                    <TableCell key={index}>
                      <p>
                        {title}
                        <span>
                          <ChevronsUpDown size={14} />
                        </span>
                      </p>
                    </TableCell>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {tableColumns.map((column, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <p>{column.name}</p>
                      <span>{column.email}</span>
                    </td>
                    <td>{column.role}</td>
                    <td>{convertDateFormat(column.created_at)}</td>
                    <td>{convertDateFormat(column.updated_at)}</td>
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AlertDialog.Root>
                          <AlertDialog.Trigger asChild>
                            <Button
                              color="gray"
                              css={{ padding: '0.5rem 0.75rem' }}
                            >
                              <PenSquare size={12} style={{ lineHeight: 0 }} />
                              <p>Editar</p>
                            </Button>
                          </AlertDialog.Trigger>
                          <EditUserScreenPopUp index={index} />
                        </AlertDialog.Root>

                        <AlertDialog.Root>
                          <AlertDialog.Trigger asChild>
                            <Button
                              color="gray"
                              size="xs"
                              css={{ padding: '0.5rem', maxHeight: 12 }}
                            >
                              <Trash2 size={12} style={{ lineHeight: 0 }} />
                            </Button>
                          </AlertDialog.Trigger>
                          <DeleteScreenPopUp index={index} />
                        </AlertDialog.Root>

                        <Button
                          color="gray"
                          size="xs"
                          css={{ padding: '0.5rem', maxHeight: 12 }}
                          onClick={() => handleUserMoreInfos(index)}
                        >
                          <ChevronRight size={12} style={{ lineHeight: 0 }} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Flex>
      )}
    </Section>
  )
}
