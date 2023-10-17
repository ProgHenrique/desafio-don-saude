import TableOfUsers from './components/table-of-users'
import { Container, Header } from './styles'

export default function Home() {
  return (
    <Container>
      <Header>
        <strong>Usuários</strong>
      </Header>
      <main>
        <TableOfUsers />
      </main>
    </Container>
  )
}
