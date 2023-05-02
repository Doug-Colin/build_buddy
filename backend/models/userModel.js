const mongoose = require('mongoose')

//be sure to add admin role to userSchema later
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)
//export this model, pass in the name of the model and the relevant Schema
module.exports = mongoose.model('users', userSchema)

//--------------------------------------------------------------------------

// const mongoose = require('mongoose')

// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Please add an email'],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Please add a password'],
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// module.exports = mongoose.model('User', userSchema)