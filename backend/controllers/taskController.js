//installed express-async-handler package (so we can use it instead of try-catch)
const asyncHandler = require("express-async-handler") 

const Task = require('../models/taskModel')
const User = require('../models/userModel')
//!!! leftover unnecessary line: const { errorHandler } = require("../middleware/errorMiddleware")

//descr: Get task
//route: GET /api/tasks
//access: Private
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })

    res.status(200).json(tasks)// 
})

   


//descr: Set task
//route: POST /api/tasks
//access: Private
////Express sends errors as html, so setup middleware.js so we can send JSON, & require/app.use it in server.js
const setTask = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const task = await Task.create({
      text: req.body.text,
      user: req.user.id,
    })
  
    res.status(200).json(task)
  })

//descr: Update task
//route: PUT /api/tasks/:id
//access: Private
const updateTask = asyncHandler(async (req, res) => {
    //get goal by id in url
    const task = await Task.findById(req.params.id) 
    //check for goal
    if (!task) {
        res.status(400)
        throw new error('Task not found.')
    }

    //get the user by logged-in user's id
    const user = await User.findById(req.user.id)

    //Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged-in user matched the goal user
    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error ('User not authorized')
    }
    //update goal via findByUpdate
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedTask)
})

//descr: Delete task
//route: DELETE /api/tasks/:id
//access: Private
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400)
        throw new error('Task not found.')
    }

    //get the user by logged-in user's id
    const user = await User.findById(req.user.id)

    //Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged-in user matches the goal user
    if (task.user.toString() !== user.id) {
        res.status(401)
        throw new Error ('User not authorized')
    }

    await task.deleteOne()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}


