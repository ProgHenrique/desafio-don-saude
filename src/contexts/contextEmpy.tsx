import { ReactNode, createContext, useState } from 'react'

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
      name: 'Nome completo do usuário',
      email: 'nome.sobrenome@empresa.com.br',
      role: 'Gerente',
      created_at: '31/05/2023 00:06',
      updated_at: '31/05/2023 00:06',
    },
  ])

  const deleteUser = (index: number) => {
    setTableColumns((state) => {
      state.splice(index, 1)
      return [...state]
    })
  }

  return (
    <EmpyContext.Provider
      value={{
        tableColumns,
        deleteUser,
      }}
    >
      {children}
    </EmpyContext.Provider>
  )
}
