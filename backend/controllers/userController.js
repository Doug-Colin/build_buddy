//descr: Register new user
//route: Posts /api/users
//access: Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

module.exports = { 
    registerUser,
 }