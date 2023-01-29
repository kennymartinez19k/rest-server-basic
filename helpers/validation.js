const User = require('../models/users')

const emailValidate = async (email) => {
    let existEmail = await User.findOne({email})

    if(existEmail){
        throw new Error("El email esta duplicado")
    }
}


const phoneValidate = async (phone) => {
    let existPhone = await User.findOne({phone})

    if(existPhone){
        throw new Error("El Telefono esta duplicado")
    }
}

module.exports = {emailValidate, phoneValidate}