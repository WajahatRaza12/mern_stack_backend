require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")

const cors = require("cors")
const workouts = require("./routes/workouts")
const app = express();

 
app.use(express.json())
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/workouts/api',workouts)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Listening to and connected to db:",process.env.PORT)
    })
}).catch((error)=>{
    console.log(error)
})



