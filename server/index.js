const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

const app = express();

const route = require("./routes/route");
const dbConnection = require("./db/connection");

app.use(express.json());
app.use(cors({
    origin: "*",
}))

app.use("/api/v1/users", route);

app.use(express.static("public"));

const port = 3001;

const startServer = async()=>{
    try {
        const database = await dbConnection(process.env.MONGO_DB);
        app.listen(port,"localhost",()=>console.log(`Server running on port: ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

startServer();