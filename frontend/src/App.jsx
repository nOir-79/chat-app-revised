import { useEffect, useRef, useState } from "react"
import { io } from 'socket.io-client'


const App = () => {
  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([''])
  const socketRef = useRef(null)
  useEffect(()=>{
    socketRef.current = io('http://localhost:3000')
    
  },[])

  useEffect(()=>{
    socketRef.current.on('receive-message',(msg)=>{
      setMessages([...messages,msg])
    })
  })
  

  
  const handleClick = (e)=>{
    e.preventDefault()
    socketRef.current.emit('message',message)
    setMessage('')
    
  }
  return(
    <>
      {messages.map((msg,index)=>{
        return <p key={index}>{msg}</p>
      })}

      <form action="">
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={handleClick}>Send</button>
        <button onClick={(e)=>{
          e.preventDefault()
          setMessages([''])
          setMessage('')
        }}>Clear</button>
      </form>
    </>
  )
}

export default App