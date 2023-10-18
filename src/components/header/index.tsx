import { ReactNode, useContext } from 'react'
import { Container, Header } from './styles'
import { ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useWindowSize } from 'src/hooks/use-window-size'
import { EmpyContext } from 'src/contexts/contextEmpy'

interface HomeProps {
  children: ReactNode
}

export default function Home({ children }: HomeProps) {
  const { user } = useContext(EmpyContext)
  const location = useLocation()
  const windowSize = useWindowSize()
  return (
    <Container>
      <Header>
        <strong>
          {location.pathname === '/create-user' && windowSize > 1024
            ? 'Criar usuário'
            : 'Usuários'}
        </strong>
        {location.pathname === '/create-user' ? (
          <p>
            Usuários <ChevronRight size={18} /> Criar usuário
          </p>
        ) : null}
        {location.pathname === '/user' ? (
          <p>
            Usuários <ChevronRight size={18} /> {user.name.split(' ')[0]}
          </p>
        ) : null}
      </Header>
      <main>{children}</main>
    </Container>
  )
}
