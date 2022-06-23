const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const articles_Routes = require('./routes/articles')
app.use('/articles', articles_Routes)

app.get('/', (req, res)=>{
    res.setHeader("Content-Type", "text/html")
    res.status(200)
    res.send('<h1>localHost:3000 working</h1>')
})



module.exports = app 
