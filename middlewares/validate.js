const { validationResult} = require("express-validator")


const validate = (req, res, next) => {
    let isError = validationResult(req)
    if(!isError.isEmpty()) return res.status(400).json(isError)

    next()
}

module.exports = {
    validate
}