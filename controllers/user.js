const {response, json, request} =  require("express")
const User = require('../models/users')
const bcryptjs = require('bcryptjs');

const usersGet = async (req = request, res = response) =>{
    let {limit = 5} = req.query
    const active = {status: true}


    let [users] = await Promise.all(
        [
            User.find(active).limit(limit)
        ]
    )

    res.json({
       users
    })
}

const usersPost = async (req, res = response) =>{
  
    let {name, password, rol, email, number} = req.body
    let user = new User({name, password, rol, email, number})

    // Encriptar password

    let salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    // guardar en DB
    try {
        await user.save()
        
            res.json({
                msg: 'Post',
                user
            })
        
    } catch (error) {
        console.log("error", error.message)
        res.json({
            msg: 'error',
        })
    }
}

const userPut = async (req, res = response) =>{
    const {id} = req.query
    const {name, status} = req.body

    let user = await User.findByIdAndUpdate(id, {name, status})

    res.json({
       msg: "Usuario actualizado"
    })
}

const usersDelete = async (req, res = response) =>{
    const {id} = req.query

    await User.findByIdAndDelete(id)
    res.json({
        msg: 'Usuario borrado'
    })
}


module.exports = {
    usersGet,
    usersPost,
    userPut,
    usersDelete,
}