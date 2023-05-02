//three routes here: register/create user, login, and get user info
const express = require ('express')
const router = express.Router()
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController')

//router for post/create request to add a user
router.post('/', registerUser)

router.post('/login', loginUser)

router.get('/current-user', getCurrentUser)

module.exports = router

//-----------------------------------------------------------------------------

// const express = require('express')
// const router = express.Router()
// const {
//   registerUser,
//   loginUser,
//   getMe,
// } = require('../controllers/userController')
// const { protect } = require('../middleware/authMiddleware')

// router.post('/', registerUser)
// router.post('/login', loginUser)
// router.get('/me', protect, getMe)

// module.exports = router