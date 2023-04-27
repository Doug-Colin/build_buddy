const mongoose = require ('mongoose')

//async connection function (all mongoose methods are async and return promises)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1) //process.exit() tells Node.js to terminate the prcess scynchronously with an exit status code
    }
}

module.exports = connectDB