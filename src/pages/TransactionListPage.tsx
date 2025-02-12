import { useEffect } from "react"


const TransactionListPage = () => {
    const handleGetInfo=async()=>{
        try {
          const user = localStorage.getItem('user')
          const token =  localStorage.getItem('token')
          const response = await fetch(`http://localhost:3000/accounts/${user}`,{
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
      useEffect(()=>{
        handleGetInfo()
    },[])
  return (
    <div>TransactionListPage</div>
  )
}

export default TransactionListPage