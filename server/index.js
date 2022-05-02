require('dotenv').config()
let PORT = process.env.PORT || 8080
const express = require('express')
const api = require('./api')
let app = express()
let API = require('./api')
let db = require('./cms')

const isDevMode = process.env.NODE_ENV === 'dev'

app.use('/api', api)
if (isDevMode) {
  app.use(express.static(__dirname + '/../app/web-build'))
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/../app/web-build/index.html')
  })
} else {
  console.log('Production mode')
  //TODO: Serve the production build (where to serve from?)
}

// app.post('/endpoint', (req, res) => {
// })

app.listen(PORT, function () {
  console.log(`listening on PORT http://localhost:${PORT}`)
})
