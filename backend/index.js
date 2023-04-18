const express = require('express')
const dotenv = require('dotenv').config()
const colors = require("colors")
const connectDB = require('./config/db')
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const port =process.env.PORT
const app =express()




app.use(cors())

//  connect to database
connectDB ()
// allow to access  data by using req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// use to change default error handler
app.use(errorHandler)

// set the home route
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/customers', require('./routes/customerRoutes'))
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/items', require('./routes/itemRoutes'))

app.listen(port, ()=>console.log(`server running in port number ${port}`))