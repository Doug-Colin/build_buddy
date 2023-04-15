const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5050
const {errorHandler} = require('./middleware/errorMiddleware')


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tasks', require('./routes/taskRoutes'))

app.use(errorHandler) //overwrite default express error handler

app.listen(port, () => console.log(`Server started on port ${port}`))

