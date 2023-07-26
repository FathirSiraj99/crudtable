const express = require('express')
const cors = require('cors')
require('dotenv').config()

const UserRoute = require('./Routes/UserRoute')
const ProductRoute = require('./Routes/ProductRoute')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/user', UserRoute)
app.use('/api/product', ProductRoute)


app.listen(process.env.PORT, '192.168.18.210', () => {
    console.log('berhasil')
})