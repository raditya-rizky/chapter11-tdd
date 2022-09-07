module.exports = {
    index: (req, res) => {
        res.status(200).json({
            status: true,
            message: "Hello World!"
        })
    },
    sum: (req, res) => {
        const { x, y } = req.body
        return res.status(200).json({
            status: true,
            message: "Parameters summarized!",
            data: { x, y, result: x + y }
        })
    }
}