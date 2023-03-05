//note- JS syntax here, syntax will be different for frontend if using Typescript/ts2015
const express = require('express')
const router = express.Router()
const { getGoals, getTasks } = require('../controllers/taskController')


router.get('/', getTasks)

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set task'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update task ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete task ${req.params.id}` })
})


module.exports = router


/*
in order of oldest to newest:
59202c9 64f48632f5170f3340531d4699ae8f2e9 'initial commit'
93350e6 c97ce65d797667b35b051d8fad1d5eee6 'server setup' (Oldest) START HERE
3f9b531 b8ac3f518170e937e19b8a8d84aa2c517 'switching from master to main'
02daeaa 9fd8b71100b872f785d3d83563c056443 'above msg + adding forgotten gitignore'
6471a19 44bacc20f90854f32606fbba5eb29f3aa 'merge remote tracking branch...'
ac6ab96 3ea0afcb49b09f04fff37623f3906ec9a resolving gitignore formatting issue'
bd5cea0 11c3e262d37fd74ea5f17a6ce1ede48e8 'server running'
173d509 94d4d56bf4ad338ad3ebf8d3f980b36f3 'setup CRUD routes' (Newest)
b099141 setting up controllers
*/