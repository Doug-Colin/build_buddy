// console.log("hello from serverland")
<<<<<<< HEAD

=======
>>>>>>> dev
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5050

const app = express()

<<<<<<< HEAD
=======
app.use('/api/tasks', require('./routes/taskRoutes'))

>>>>>>> dev
app.listen(port, () => console.log(`Server started on port ${port}`))

