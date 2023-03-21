

//descr: Get task
//route: GET /api/tasks
//access: Private
const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get tasks' })
}

//descr: Set task
//route: POST /api/tasks
//access: Private
const setTask = (req, res) => {
    res.status(200).json({ message: 'Set tasks' })
}

//descr: Update task
//route: PUT /api/tasks/:id
//access: Private
const updateTask = (req, res) => {
    res.status(200).json({ message: `Update task ${req.params.id}` })
}

//descr: Delete task
//route: DELETE /api/tasks/:id
//access: Private
const deleteTask = (req, res) => {
    res.status(200).json({ message: `Delete task ${req.params.id}` })
}


module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}

//GIT_COMMITTER_DATE="2023-03-03 15:30:00" git commit --amend --no-edit --date "2023-03-03 15:30:00" 751f81eccd158f981f60e9151fe2ff71cc3f3dc9