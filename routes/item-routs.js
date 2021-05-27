const {Router} = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Item get requets recieved!')
})

router.post('/', (req, res) => {
    res.send('Item post requets recieved!')
})

router.put('/', (req, res) => {
    res.send('Item put requets recieved!')
})

router.delete('/', (req, res) => {
    res.send('Item delete requets recieved!')
})

module.exports = router