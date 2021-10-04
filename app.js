// import module
const express = require('express')
const app = express()

// launching module
app.use(express.json())

// set up port
app.listen({ port: 5000 }, async () => {
  console.log('server up on http://localhost:5000')

  console.log('Database synced')
})
