const express= require("express");
const app =express();

const cors = require('cors');
const mongoose= require('mongoose');
const signup = require('./router/Signup');
const post = require('./router/Posts');
app.use(cors());
app.use(express.json());
const url ="mongodb://localhost:27017/mern";
// mongoose.Promise = global.Promise;
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Mongodb database connection established successfully");

})
// app.get("/",(req,res) =>{
//     res.end("hello");
// })
app.use('/Signup',signup);
app.use('/Posts',post);
app.listen(5000,(err) => {
    if(err) 
    throw err;
    console.log("server on 3000")
});