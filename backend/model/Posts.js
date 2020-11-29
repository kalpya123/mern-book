const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const PostSchema= new Schema({
    username:{
        type:String,
        required:true
    },
    booktitle:{
        type:String,
        required:true,
        // unique:true  
    },
    decription:{
        type:String,
        required:true,
    }

})

const Post= mongoose.model('posts',PostSchema);
module.exports = Post;