//note- JS syntax here, syntax will be different for frontend if using Typescript/ts2015
const express = require('express')
const router = express.Router()
const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController')


router.get('/', getTasks)

router.post('/', setTask)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)


module.exports = router