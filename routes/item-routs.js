const {Router} = require('express')
const express = require('express')
const router = express.Router()

const connection = require('../database/db-connection')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM Item', function (err, rows, fields) {
        if (err)
             throw err
            res.send(rows)
        
            
      })
     
})

router.post('/', (req, res) => {
    var code = req.body.code
    var desc = req.body.description
    var unitPrice = req.body.unitPrice
    var qtyOnHand = req.body.qtyOnHand

    connection.query('INSERT INTO Item VALUES  (?, ?, ?, ?)', [code, desc, unitPrice, qtyOnHand], function (err, rows, fields) {
        if (err) throw err
            res.send(rows)
      })
})

router.put('/', (req, res) => {
    var code = req.body.code
    var desc = req.body.description
    var unitPrice = req.body.unitPrice
    var qtyOnHand = req.body.qtyOnHand

    connection.query('UPDATE Item SET description = ?, unitPrice = ?, qtyOnHand = ? WHERE code = ?',
                         [desc, unitPrice, qtyOnHand, code], function (err, rows, fields) {
                            if (err) throw err
                                res.send(rows)
                          })
    
})

router.delete('/', (req, res) => {
    var code = req.headers.code

    connection.query('DELETE FROM Item WHERE code = ? ' , code, function (err, rows, fields) {
        if (err) throw err
            res.send(rows)
 
        })
    
})

module.exports = router