const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true
    },
    number: {
        type: String,
        required: [true, "El Numero es requerido"],
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    rol: {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    img: {
        type: String
    },
    status: {
        type: Boolean,
        default: true,
    },
    google:{
        type: Boolean,
        default: false
    }
})


module.exports = model("User", UserSchema)