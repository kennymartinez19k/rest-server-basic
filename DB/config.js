const mongoose = require('mongoose');

const DBConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODBCNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })    
        console.log("base de datos online")    
    } catch (error) {
        console.log(error)
        throw new Error("Error al inicializar la base de datos")
    }
}

module.exports = {
    DBConnection
}