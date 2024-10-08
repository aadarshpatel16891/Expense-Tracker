const express= require('express');
const app = express();
const path = require('path');
require("dotenv").config({path:"./.env"})
app.use(require('morgan')("combined"));

app.set("views", path.join(__dirname,"views"));
app.set('view engine', 'ejs');

const expenseDB=require("./config/db")

const indexRouter = require("./routes/index");


app.use('/', indexRouter);







app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})