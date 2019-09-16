const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ API: 'Up and running' })
})

server.listen(8000, () => console.log('Server up on port 8000'))