const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3300

//setup static file

app.use(express.static(path.join(__dirname, 'wwwroot')))
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine(
  'html',
  handlebars({
    extname: '.html' /*config external .filename */,
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: [path.join(__dirname, 'resources/views/layouts/partials')],
  })
)
app.set('view engine', 'html')
//console.log(`path: ${path.join(__dirname,'resources/views')}`)
app.set('views', path.join(__dirname, 'resources/views'))

//home page
app.get('/', (req, res) => res.render('home'))
//news
app.get('/news', (req, res) => res.render('news'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
