const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
app.use(cors())
app.use(express.json())
const emailroute = require("./routes/emailRouter")
dotenv.config()
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
app.use("/email",emailroute)
