const {response} = require('express')

const carsGet = (req, res = response) => {

    let {q, limit = 10, page = 1} = req.query

    res.json({
        request: "get",
        brand: 'Toyota',
        q,
        limit,
        page
    })
}

const carsPost =  (req, res = response) => {
    let {name, year} = req.body
    
    res.json({
        request: "post",
        brand: 'Toyota',
        name,
        year
    })
}

const carsPut = (req, res = response) => {
    let {id} = req.params
    let {name, year} = req.body

    res.json({
        request: "put",
        brand: 'Toyota',
        id,
        name,
        year
    })
}

const carsDelete =  (req, res = response) => {
    res.json({
        request: "delete",
        brand: 'Toyota'
    })
}

const carsPatch = (req, res = response) => {
    res.json({
        request: "patch",
        brand: 'Toyota'
    })
}

module.exports = {
    carsGet,
    carsPost,
    carsPut,
    carsDelete,
    carsPatch
}