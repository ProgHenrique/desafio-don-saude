import * as AlertDialog from '@radix-ui/react-alert-dialog'
import {
  ALertDialogDescription,
  AlertDialogContent,
  AlertDialogTitle,
  Flex,
  Overlay,
} from './styles'
import { AlertCircle } from 'lucide-react'
import { Button } from 'src/styles/button'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'

interface DeleteScreenPopUpProps {
  index: number
}

export default function DeleteScreenPopUp({ index }: DeleteScreenPopUpProps) {
  const { deleteUser } = useContext(EmpyContext)
  function handleDeleteUser() {
    deleteUser(index)
  }
  return (
    <AlertDialog.Portal>
      <Overlay />
      <AlertDialogContent>
        <AlertCircle size={72} color="#FF4E3A" />
        <Flex>
          <AlertDialogTitle>Excluir usuário</AlertDialogTitle>
          <ALertDialogDescription>
            Tem certeza que deseja excluir esse usuário?
          </ALertDialogDescription>
        </Flex>

        <Flex css={{ flexDirection: 'row', gap: '1rem', width: '100%' }}>
          <AlertDialog.Cancel asChild>
            <Button
              color="gray"
              size="md"
              css={{
                color: 'rgba(18, 25, 41, 0.64)',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              Cancelar
            </Button>
          </AlertDialog.Cancel>

          <AlertDialog.Action asChild>
            <Button
              color="red"
              size="md"
              css={{ width: '100%', justifyContent: 'center' }}
              onClick={handleDeleteUser}
            >
              Excluir
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  )
}
