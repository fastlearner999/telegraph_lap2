const app = require('./server')
const port = 3000 || 3300

app.listen(port, ()=> console.log(`listening at ${port}`))
