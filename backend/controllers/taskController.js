const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get tasks' })
}

module.exports = {
    getTasks,
}