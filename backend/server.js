// console.log("hello from serverland")
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5050

const app = express()

app.use('/api/tasks', require('./routes/taskRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))

