import { Button } from 'src/styles/button'
import { Flex, Section, UserInfo, UserInfoContainer } from './styles'
import { useContext } from 'react'
import { EmpyContext } from 'src/contexts/contextEmpy'
import { distanceToNow } from 'src/utils/distance-to-now'
import { useNavigate } from 'react-router-dom'

export default function ViewUserInfos() {
  const { user } = useContext(EmpyContext)
  const navigate = useNavigate()

  return (
    <Section>
      <Flex>
        <UserInfoContainer>
          <strong>{user.name}</strong>
          <UserInfo>
            <p>Email</p>
            <strong>{user.email}</strong>
          </UserInfo>
          <UserInfo>
            <p>Cargo</p>
            <strong>{user.role}</strong>
          </UserInfo>
          <UserInfo>
            <p>Telefone</p>
            <strong>{user.phone}</strong>
          </UserInfo>
          <UserInfo>
            <p>Ultima atualização</p>
            <strong>{distanceToNow(user.updated_at)}</strong>
          </UserInfo>
          <UserInfo>
            <p>Criação</p>
            <strong>{distanceToNow(user.created_at)}</strong>
          </UserInfo>
        </UserInfoContainer>
        <Button
          css={{ padding: '0.75rem 2rem' }}
          color="gray"
          size={'md'}
          // go to home page
          onClick={() => navigate('/')}
        >
          Voltar
        </Button>
      </Flex>
    </Section>
  )
}
