import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth()
  
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
          login(data.token)
          localStorage.setItem('user',username)
         
        }      
      } catch (error) {
        console.log('error:', error)
      }
   
    }
  
  
  
  
    return (
      <div>
        <input value={username} onChange={handleUsernameChange} type="text" placeholder='username...' />
        <input value={password} onChange={handlePasswordChange} type="password" placeholder='password...'/>
        <button onClick={handleLogin}>Login</button>
        
      </div>
    )
}

export default LoginPage