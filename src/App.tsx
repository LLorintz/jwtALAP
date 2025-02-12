import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import TransactionListPage from './pages/TransactionListPage'
import { useAuth } from './context/AuthContext'
import requireAuth from './requireAuth/requireAuth'
function App() {

  const { isAuthenticated } = useAuth()

  return (
    <>
      <BrowserRouter>

        {!isAuthenticated && <Link to={'/'}>Login</Link>}
        {isAuthenticated &&
          <>
            <Link to={'/home'}>Home</Link>|
            <Link to={'/transactions'}>Transactions</Link>
          </>}
        <Routes>
          <Route path='/' Component={LoginPage}></Route>
          <Route path='/home' Component={requireAuth(HomePage)}></Route>
          <Route path='/transactions' Component={requireAuth(TransactionListPage)}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
