import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import { useEffect } from 'react'
import Splash from './components/splash'

export default function Router() {
  const location = useLocation()
  const userAuthenticated = false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={userAuthenticated ? <Home /> : <Splash />} />
      </Route>
    </Routes>
  )
}
