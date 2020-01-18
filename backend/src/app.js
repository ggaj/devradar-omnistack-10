const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)
setupWebSocket(server)

mongoose.connect('mongodb://localhost:27017/omnistack10',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = server