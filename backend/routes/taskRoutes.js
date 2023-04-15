//note- JS syntax here, syntax will be different for frontend if using Typescript/ts2015
const express = require('express')
const router = express.Router()
const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController')

//combined route for get and post requests (create/read)
router.route('/').get(getTasks).post(setTask)

//combined route for put and delete requests (update/delete)
router.route('/:id').put(updateTask).delete(deleteTask)



module.exports = router