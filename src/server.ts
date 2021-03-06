import * as http from 'http'
import Api from './api/api'
import Database from './models/index'
import Socket from './api/socket'

// This code is the start code of our API, it calls the models (with the Sequelize database configurations),
// calls the config.ts (chooses the API configuration), and creates and starts the server passing the API settings.

const config = require('./config/env/config')()

const server = http.createServer(Api)

Socket.initIo(server)

server.listen(config.serverPort)

server.on('listening', () => console.log(`server listing ${config.serverPort}`))
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Error: ${error}`))
Database.connect()
