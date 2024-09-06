const express = require('express')
const {createServer} = require('http')
const {Server} = require('socket.io')
const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173"
    }
})
app.use(express.json())


io.on('connection',(socket)=>{
    console.log('a user connected')

    socket.on('disconnect',()=>{
        console.log('User disconnected')
    })
    socket.on('join-room',(room)=>{
        socket.join(room)
        console.log('User joined room:',room)
    })

    socket.on('room-message',(room,msg)=>{
        console.log(room,msg)
        io.to(room).emit('receive-message',msg)
    })
})
server.listen(3000,()=>{
    console.log('Server running at port 3000')
})