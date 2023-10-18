import { Users2 } from 'lucide-react'
import { Content, WithoutUser } from './styles'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'

export default function WithoutUsersRegistered() {
  const { numberOfUsers } = useContext(EmpyContext)
  return (
    <Content>
      <WithoutUser>
        <Users2 size={56} color="#444444" />
        <div>
          <strong>
            {numberOfUsers > 0
              ? 'Nenhum Usuário encontrado'
              : 'Você ainda não tem usuários cadastrados'}
          </strong>
          <span>Experimente criar um novo agora</span>
        </div>
      </WithoutUser>
    </Content>
  )
}
