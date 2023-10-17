import { ReactNode, createContext, useEffect, useState } from 'react'

interface TableColumn {
  name: string
  email: string
  role: string
  created_at: string
  updated_at: string
}

interface FilterFormData {
  benefit: string
  role: string
  created_at: string
  updated_at: string
}

interface EmpyContextType {
  tableColumns: TableColumn[]
  seeColumns: boolean
  deleteUser: (index: number) => void
  searchUser: (term: string) => void
  setSeeColumns: React.Dispatch<React.SetStateAction<boolean>>
  filterUsers: (data: FilterFormData) => void
  clearFilter: () => void
}

export const EmpyContext = createContext({} as EmpyContextType)

interface ListContextProviderProps {
  children: ReactNode
}

export function EmpyContextProvider({ children }: ListContextProviderProps) {
  // user table columns
  const [tableColumns, setTableColumns] = useState<TableColumn[]>([
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Adm',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Ascom Empy',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Comercial Empy',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Gerente',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Comercial',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Financeiro',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
    {
      name: 'Henrique Ramos',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Gerente',
      created_at: '2023-05-31',
      updated_at: '2023-05-31',
    },
  ])
  const [tableColumnBackup, setTableColumnBackup] = useState<TableColumn[]>([])

  // show and hide columns
  const [seeColumns, setSeeColumns] = useState(true)

  useEffect(() => {
    if (tableColumns.length > tableColumnBackup.length) {
      setTableColumnBackup([...tableColumns])
    }
  }, [tableColumnBackup, tableColumns])

  const deleteUser = (index: number) => {
    setTableColumns((state) => {
      state.splice(index, 1)
      return [...state]
    })
  }

  const searchUser = (term: string) => {
    if (term === '') {
      setTableColumns([...tableColumnBackup])
      return
    }
    const likeUsers = tableColumns.filter(
      (item) => item.name.toLowerCase().indexOf(term) > -1,
    )

    if (likeUsers.length < 1) {
      setTableColumns([...tableColumnBackup])
      return
    }

    setTableColumns([...likeUsers])
  }

  const filterUsers = (data: FilterFormData) => {
    const filterArray = tableColumnBackup.filter((column) => {
      const role =
        data.role !== '' ? data.role.toLowerCase() : column.role.toLowerCase()
      const createdAt =
        data.created_at !== '' ? data.created_at : column.created_at
      const updatedAt =
        data.updated_at !== '' ? data.updated_at : column.updated_at

      if (
        role === column.role.toLowerCase() &&
        createdAt === column.created_at &&
        updatedAt === column.updated_at
      ) {
        console.log(column)
        return column
      }

      return null
    })

    setTableColumns([...filterArray])
  }

  const clearFilter = () => {
    setTableColumns([...tableColumnBackup])
  }

  return (
    <EmpyContext.Provider
      value={{
        tableColumns,
        seeColumns,
        deleteUser,
        searchUser,
        setSeeColumns,
        filterUsers,
        clearFilter,
      }}
    >
      {children}
    </EmpyContext.Provider>
  )
}
