const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { DBConnection } = require('../DB/config')
class Server{
    constructor(){
        this.app = express()

        // connect to DB

        this.connectDB()

        // Call middlewares
        this.middleWares()

        // call routes
        
        this.routes()
    }

    async connectDB(){
        await DBConnection()
    }

    middleWares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static("public"))
    }

    routes(){
        this.app.use('/api/users', require('../routes/user') )
        this.app.use('/api/cars', require('../routes/cars') )

    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log("Escuchando al puerto " + process.env.PORT)
        })
    }
}

module.exports = Server