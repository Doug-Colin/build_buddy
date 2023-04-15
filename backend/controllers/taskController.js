const asyncHandler = require("express-async-handler") //express-async-handler instead of try-catche
  

//descr: Get task
//route: GET /api/tasks
//access: Private
const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get tasks' })
}

//descr: Set task
//route: POST /api/tasks
//access: Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        //Express sends errors as html, so setup errorMiddlware.js so we can send JSON, & require/app.use it in server.js
        throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'Set tasks' })
})

//descr: Update task
//route: PUT /api/tasks/:id
//access: Private
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update task ${req.params.id}` })
})

//descr: Delete task
//route: DELETE /api/tasks/:id
//access: Private
const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete task ${req.params.id}` })
})


module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}

//GIT_COMMITTER_DATE="2023-03-03 15:30:00" git commit --amend --no-edit --date "2023-03-03 15:30:00" 751f81eccd158f981f60e9151fe2ff71cc3f3dc9

