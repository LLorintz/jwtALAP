
import { useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }

  const handleLogin = async()=>{
    try {
      const response = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
      })
      if (!response.ok) {
        throw new Error
      }
      const data = await response.json()
      if (data.success) {
        console.log(data)
        localStorage.setItem('JWT',data.token)
      }      
    } catch (error) {
      console.log('error:', error)
    }
 
  }

  const handleGetInfo=async()=>{
    try {
      const token =  localStorage.getItem('JWT')
      const response = await fetch(`http://localhost:3000/accounts/${username}`,{
      headers:{"Authorization":`Bearer ${token}`}
      })
      if (!response.ok) {
        throw new Error
      }
     
      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.log('error', error)
    }
    
  }


  return (
    <div>
      <input value={username} onChange={handleUsernameChange} type="text" placeholder='username...' />
      <input value={password} onChange={handlePasswordChange} type="password" placeholder='password...'/>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetInfo}>GetInfo</button>
    </div>
  )
}

export default App
