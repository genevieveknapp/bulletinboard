const express = require('express')
const app = express()

const router = require('./router')

app.use(express.static(__dirname + '/public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(3000)