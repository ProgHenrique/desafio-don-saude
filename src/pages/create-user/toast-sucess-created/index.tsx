import {
  Content,
  Flex,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

interface ToastSuccessCreatedProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ToastSuccessCreated({
  open,
  setOpen,
}: ToastSuccessCreatedProps) {
  return (
    <>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <Flex>
          <Content>
            <ToastTitle>Sucesso!</ToastTitle>
            <ToastDescription>usuário criado com sucesso</ToastDescription>
          </Content>
        </Flex>
      </ToastContainer>

      <ToastViewport />
    </>
  )
}
