const express = require('express');
const app = express()
const PORT = 8080

// callback -> anonima
app.get('/', (req, res) => {
  res.send('Hola a todos!')
})

app.listen(PORT, () => {
  console.log(`El servidor arranco en: http://localhost:${PORT}`)
})