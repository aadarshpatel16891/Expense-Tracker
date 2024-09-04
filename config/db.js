const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((error)=>
    console.error("Error connecting to MongoDB", error.message))