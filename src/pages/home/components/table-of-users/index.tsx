import { Button } from 'src/styles/button'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Flex, Section, Table, TableCell } from './style'
import { ChevronsUpDown, PenSquare, Trash2 } from 'lucide-react'
import DeleteScreenPopUp from '../delete-user-of-table'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'
import WithoutUsersRegistered from '../without-users-registered'
import SearchAndCreateUser from '../search-and-create-user'

export default function TableOfUsers() {
  const { tableColumns } = useContext(EmpyContext)

  const tableCells = [
    'Nome',
    'Cargo',
    'Data de cadastro',
    'Última alteração',
    'Ações',
  ]

  return (
    <Section>
      <SearchAndCreateUser />
      {/* In case with no users regitered render component to report this */}
      {tableColumns.length < 1 ? (
        <WithoutUsersRegistered />
      ) : (
        <Flex>
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
                    <td>{column.created_at}</td>
                    <td>{column.updated_at}</td>
                    <td>
                      <div
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          color="gray"
                          css={{ padding: '0.5rem 0.75rem' }}
                        >
                          <PenSquare size={12} style={{ lineHeight: 0 }} />
                          <p>Editar</p>
                        </Button>
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
