const express = require('express')
require('dotenv').config()
const cors = require('cors')
class Server{
    constructor(){
        this.app = express()
        this.middleWares()
        this.port = process.env.PORT || 8090
        
        this.routes()
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
        this.app.listen(this.port, () => {
            console.log("Escuchando al puerto " + this.port)
        })
    }
}

module.exports = Server
