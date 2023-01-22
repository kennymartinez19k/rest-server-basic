const {response} =  require("express")

const usersGet = (req, res = response) =>{
    res.json({
        msg: 'Get from controllers'
    })
}

const usersPost = (req, res = response) =>{
    res.json({
        msg: 'Post'
    })
}

const userPut = (req, res = response) =>{
    res.json({
        msg: 'Put'
    })
}

const usersDelete = (req, res = response) =>{
    res.json({
        msg: 'Delete'
    })
}

const usersPatch = (req, res = response) =>{
    res.json({
        msg: 'patch'
    })
}

module.exports = {
    usersGet,
    usersPost,
    userPut,
    usersDelete,
    usersPatch
}