const getAllMovie = (req, res) => {
    console.log('Hello from Movie route')
    res.status(200).json({
        message: 'hello world'
    })
}


module.exports = { getAllMovie }