// server.js
// import port from './json-server'
const s = require('./json-server')

const jsonServer = require('json-server')
const path = require('path')
// const port = require('./json-server.js')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'src/dummy-database/db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(s.port, () => {
  console.log('JSON Server is running on port: ', s.port)
})
