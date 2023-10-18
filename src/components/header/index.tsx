import { ReactNode } from 'react'
import { Container, Header } from './styles'
import { ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useWindowSize } from 'src/hooks/use-window-size'

interface HomeProps {
  children: ReactNode
}

export default function Home({ children }: HomeProps) {
  const location = useLocation()
  const windowSize = useWindowSize()
  return (
    <Container>
      <Header>
        <strong>{windowSize > 1024 ? 'Criar usuário' : 'Usuários'}</strong>
        {location.pathname === '/create-user' ? (
          <p>
            Usuários <ChevronRight size={18} /> Criar usuário
          </p>
        ) : null}
      </Header>
      <main>{children}</main>
    </Container>
  )
}
