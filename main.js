const express = require('express')
const app = express()
const port = 3000

const a = 1,
  b = 2,
  c = a + b
app.get('/', (req, res) => res.send('Hello from Nodejs!'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
