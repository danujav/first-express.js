const { Router } = require('express')
const express = require('express')
const router = express.Router()
 
router.get('/', (req, res) => {
    console.log('execute get')
    res.send('Customer get requets recieved!')
})

router.post('/', (req, res) => {
    console.log('execute post')
    res.send('Customer post requets recieved!')
})

router.put('/', (req, res) => {
    console.log('execute put')
    res.send('Customer put requets recieved!')
})

router.delete('/', (req, res) => {
    console.log('execute delete')
    res.send('Customer delete requets recieved!')
})

module.exports = router