import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import { useEffect, useState } from 'react'
import Splash from './components/splash'
import CreateNewUser from './pages/create-user'
import DefaultLayout from './layout/default-layout'
import ViewUserInfos from './pages/view-user'

export default function Router() {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setUserAuthenticated(true)
    }, 1000)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route
        path="/"
        element={userAuthenticated ? <DefaultLayout /> : <Splash />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateNewUser />} />
        <Route path="/user" element={<ViewUserInfos />} />
      </Route>
    </Routes>
  )
}
