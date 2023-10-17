import { Users2 } from 'lucide-react'
import { Content, WithoutUser } from './styles'

export default function WithoutUsersRegistered() {
  return (
    <Content>
      <WithoutUser>
        <Users2 size={56} color="#444444" />
        <div>
          <strong>Você ainda não tem usuários cadastrados</strong>
          <span>Experimente criar um novo agora</span>
        </div>
      </WithoutUser>
    </Content>
  )
}
