import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { EmpyContextProvider } from './contexts/contextEmpy'

export default function App() {
  return (
    <BrowserRouter>
      <EmpyContextProvider>
        <Router />
      </EmpyContextProvider>
    </BrowserRouter>
  )
}
