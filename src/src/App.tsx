import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import TransactionListPage from './pages/TransactionListPage'

function App() {

  return(
  <>
    <BrowserRouter>
        <Link to={'/'}>Home</Link>|
        <Link to={'/login'}>Login</Link>|
        <Link to={'/transactions'}>Transactions</Link>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/transactions' Component={TransactionListPage}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
