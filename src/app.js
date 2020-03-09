const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirPath = path.resolve('public')

app.use(express.static(publicDirPath))

app.set('views', publicDirPath)
app.set('view engine', 'hbs')

app.get('/', (req,res) => {
  res.render('index.hbs')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is up and runing on port ${port}`)
})