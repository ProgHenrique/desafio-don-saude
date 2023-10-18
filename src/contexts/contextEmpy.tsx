import { ReactNode, createContext, useEffect, useState } from 'react'

interface TableColumn {
  name: string
  email: string
  role: string
  phone: string
  password: string
  created_at: string
  updated_at: string
}

interface FilterFormData {
  benefit: string
  role: string
  created_at: string
  updated_at: string
}

interface CreateUserFormData {
  name: string
  email: string
  role: string
  phone: string
  password: string
  confirmPassword: string
}

interface EditUserFormData {
  name: string
  email: string
  role: string
  phone: string
}

interface EmpyContextType {
  tableColumns: TableColumn[]
  numberOfUsers: number
  seeColumns: boolean
  deleteUser: (index: number) => void
  searchUser: (term: string) => void
  setSeeColumns: React.Dispatch<React.SetStateAction<boolean>>
  filterUsers: (data: FilterFormData) => void
  clearFilter: () => void
  createNewUser: (data: CreateUserFormData) => void
  editUser: (index: number, data: EditUserFormData) => void
}

export const EmpyContext = createContext({} as EmpyContextType)

interface ListContextProviderProps {
  children: ReactNode
}

export function EmpyContextProvider({ children }: ListContextProviderProps) {
  // user table columns
  const [tableColumns, setTableColumns] = useState<TableColumn[]>([])
  const [tableColumnBackup, setTableColumnBackup] = useState<TableColumn[]>([])

  const numberOfUsers = tableColumnBackup.length

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
    const likeUsers = tableColumnBackup.filter(
      (item) => item.name.toLowerCase().indexOf(term) > -1,
    )

    setTableColumns([...likeUsers])
  }

  const filterUsers = (data: FilterFormData) => {
    const filterArray = tableColumnBackup.filter((column) => {
      const role =
        data.role !== '' ? data.role.toLowerCase() : column.role.toLowerCase()
      const createdAt =
        data.created_at !== ''
          ? data.created_at
          : column.created_at.split('T')[0]
      const updatedAt =
        data.updated_at !== ''
          ? data.updated_at
          : column.updated_at.split('T')[0]

      if (
        role === column.role.toLowerCase() &&
        createdAt === column.created_at.split('T')[0] &&
        updatedAt === column.updated_at.split('T')[0]
      ) {
        return column
      }

      return null
    })

    setTableColumns([...filterArray])
  }

  const clearFilter = () => {
    setTableColumns([...tableColumnBackup])
  }

  const createNewUser = ({
    email,
    name,
    password,
    phone,
    role,
  }: CreateUserFormData) => {
    setTableColumns([
      ...tableColumns,
      {
        email,
        name,
        role,
        password,
        phone: phone.replace(/\D/g, ''),
        updated_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      },
    ])
  }

  const editUser = (index: number, data: EditUserFormData) => {
    setTableColumns((state) => {
      state[index].email = data.email
      state[index].name = data.name
      state[index].phone = data.phone.replace(/\D/g, '')
      state[index].role = data.role
      state[index].updated_at = new Date().toISOString()

      return [...state]
    })
  }

  return (
    <EmpyContext.Provider
      value={{
        tableColumns,
        numberOfUsers,
        seeColumns,
        deleteUser,
        searchUser,
        setSeeColumns,
        filterUsers,
        clearFilter,
        createNewUser,
        editUser,
      }}
    >
      {children}
    </EmpyContext.Provider>
  )
}
