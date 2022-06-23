const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('<h1>Articles Routes /articles</h1>')
})

router.post('/', (req, res)=>{
    // post article    
})

router.get('/:id', (req, res)=>{
    // get individual article    
})

router.put('/:id', (req, res)=>{
    // edit a individual article    
})

router.delete('/:id', (req, res)=>{
    // delete a individual article    
})

module.exports = router
