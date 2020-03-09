const path = require('path')
const express = require('express')

const app = express()

const publicDirPath = path.resolve('public')

app.use(express.static(publicDirPath))


app.get('/', (req, res) => {
  res.sendFile('../public/index.html')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is up and runing on port ${port}`)
})