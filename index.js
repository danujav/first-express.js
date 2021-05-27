const express = require('express')
const app = express()
const port = 3000

const customer = require('./routes/customer-routs')
const item = require('./routes/item-routs')

app.use('/customer', customer)
app.use('/item', item)

app.use('/', (req, res) => {
    res.send('default path')
    console.log('default path')
})

app.listen(port, () => {
    console.log(`http://localhost:${port} server started...`)
})