import { Outlet } from 'react-router-dom'
import Header from 'src/components/header'

export default function DefaultLayout() {
  return (
    <div>
      <Header>
        <Outlet />
      </Header>
    </div>
  )
}
