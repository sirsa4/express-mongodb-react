const {connect} = require("mongoose");

const dbConnection = async(url)=>{
    try {
        const userDB = await connect(url)
        console.log("MongoDB is connected...");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;