const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const SigninSchema = new Schema({
username :{
    type:String,
    required:true
},
password :{
    type:String,
    required:true
}
})

const Signin = mongoose.model('Signin',SigninSchema);

module.exports= Signin;
