import { ReactNode, createContext, useEffect, useState } from 'react'

interface tableColumn {
  name: string
  email: string
  role: string
  created_at: string
  updated_at: string
}
interface EmpyContextType {
  tableColumns: tableColumn[]
  deleteUser: (index: number) => void
  searchUser: (term: string) => void
}

export const EmpyContext = createContext({} as EmpyContextType)

interface ListContextProviderProps {
  children: ReactNode
}

export function EmpyContextProvider({ children }: ListContextProviderProps) {
  const [tableColumns, setTableColumns] = useState<tableColumn[]>([
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Adm',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Ascom Empy',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Comercial Empy',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Gerente',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Comercial',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Financeiro',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Diretor',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
    {
      name: 'Henrique Ramos',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Gerente',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
  ])

  const [tableColumnBackup, setTableColumnBackup] = useState<tableColumn[]>([])

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

  return (
    <EmpyContext.Provider
      value={{
        tableColumns,
        deleteUser,
        searchUser,
      }}
    >
      {children}
    </EmpyContext.Provider>
  )
}
