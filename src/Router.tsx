import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import { useEffect, useState } from 'react'
import Splash from './components/splash'

export default function Router() {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setUserAuthenticated(true)
    }, 2000)
  }, [])

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
