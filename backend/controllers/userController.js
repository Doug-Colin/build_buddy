//descr: Register new user
//route: POST /api/users
//access: Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

//descr: Authenticate a user
//route: POST /api/users/login
//access: Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}


//descr: Get user data
//route: GET /api/users/current-user
//access: Public
const getCurrentUser = (req, res) => {
    res.json({message: 'User data display'})
}

module.exports = { 
    registerUser,
    loginUser,
    getCurrentUser,
 }